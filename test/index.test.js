import animations from '../src/index'
import { properties } from 'animatable-properties'
import { validate } from 'waapi-timing-properties'
import isPlainObject from 'lodash.isplainobject'

const sanitize = require('sanitize-filename')
const keyframesAllowedAttributes = ['offset', 'easing', 'composite', ...properties]

const checkCategories = (categories) => {
  for (const item in categories) {
    if (categories[item] !== true) {
      if (isPlainObject(categories[item])) {
        const response = checkCategories(categories[item])
        if (response !== true) {
          return `${item} > ${response}`
        }
      } else {
        return `${item}: ${categories[item]}`
      }
    }
  }
  return true
}

const checkAttributesOrder = (attributes) => {
  for (const attribute of keyframesAllowedAttributes) {
    if (attribute === attributes[0]) {
      attributes.shift()
    }
    if (attributes.length === 0) {
      return true
    }
  }
  return false
}

Object.keys(animations).forEach((key) => {
  if (Array.isArray(animations[key].keyframes)) {
    describe(`\n\n******************************\n${key} animation\n******************************\n`, () => {
      describe(`Animation name to be valid filename`, () => {
        test(`${key}`, () => {
          expect(sanitize(key)).toEqual(key)
        })
      })
      // Keyframes
      describe(`keyframes`, () => {
        const keyframesOffsets = []
        const keyframesEasings = []
        const keyframesComposites = []
        const animationAttributes = {}
        describe(`to contain only allowed attributes`, () => {
          animations[key].keyframes.forEach((keyframe, index) => {
            const keyframesAttributes = []
            Object.keys(keyframe).forEach((attribute) => {
              keyframesAttributes.push(attribute)
              if (attribute === 'offset' && keyframe[attribute] !== null) {
                keyframesOffsets.push(keyframe[attribute])
              } else if (attribute === 'easing') {
                keyframesEasings.push(keyframe[attribute])
              } else if (attribute === 'composite') {
                keyframesComposites.push(keyframe[attribute])
              } else {
                animationAttributes[attribute] = true
              }
            })
            test(`${index}: ${keyframesAttributes}`, () => {
              expect(keyframesAllowedAttributes).toEqual(expect.arrayContaining(keyframesAttributes))
            })
          })
        })

        describe(`attributes to be in order according to convention`, () => {
          animations[key].keyframes.forEach((keyframe, index) => {
            const keyframesAttributes = []
            Object.keys(keyframe).forEach((attribute) => {
              keyframesAttributes.push(attribute)
            })
            test(`${index}: ${keyframesAttributes}`, () => {
              expect(checkAttributesOrder(keyframesAttributes)).toEqual(true)
            })
          })
        })

        // Validate animatable css properties
        describe(`animatable css properties to have valid values`, () => {
          animations[key].keyframes.forEach((keyframe, index) => {
            ;['offset', 'easing', 'composite'].forEach((attribute) => {
              delete keyframe[attribute]
            })
            if ([0, animations[key].keyframes.length - 1].includes(index)) {
              test(`${index}: first and last keyframe to contain all animatable properties used in animation`, () => {
                expect(Object.keys(keyframe)).toEqual(expect.arrayContaining(Object.keys(animationAttributes)))
              })
            }
          })
        })

        // Offsets
        if (keyframesOffsets.length > 0) {
          describe(`offsets`, () => {
            describe(`to be number between 0 and 1`, () => {
              keyframesOffsets.forEach((value, index) => {
                test(`${index}: ${value}`, () => {
                  expect(value).toEqual(expect.any(Number))
                  expect(value).toBeGreaterThanOrEqual(0)
                  expect(value).toBeLessThanOrEqual(1)
                })
              })
            })
            describe(`to be in ascending order`, () => {
              keyframesOffsets.forEach((value, index) => {
                if (index > 0) {
                  test(`${index}: ${value} >= ${keyframesOffsets[index - 1]}`, () => {
                    expect(value).toBeGreaterThanOrEqual(keyframesOffsets[index - 1])
                  })
                }
              })
            })
          })
        }

        //Easings
        if (keyframesEasings.length > 0) {
          describe(`easings`, () => {
            describe(`to be valid`, () => {
              keyframesEasings.forEach((value, index) => {
                test(`${index}: ${value}`, () => {
                  expect(validate({ easing: value })).toBe(true)
                })
              })
            })
          })
        }

        //Composites
        if (keyframesComposites.length > 0) {
          describe(`composites`, () => {
            describe(`to be valid`, () => {
              keyframesComposites.forEach((value, index) => {
                test(`${index}: ${value}`, () => {
                  expect(validate({ composite: value })).toBe(true)
                })
              })
            })
          })
        }
      })

      // Options
      describe(`options`, () => {
        test(`to contain only valid options`, () => {
          expect(validate(animations[key].options, true, true)).toBe(true)
        })
        const options = []
        Object.keys(animations[key].options).forEach((option) => {
          options.push(option)
        })
        test(`to be in alphabetical order: ${options}`, () => {
          expect(JSON.stringify(options) === JSON.stringify(options.sort())).toBe(true)
        })
      })
    })
  }
})

if (isPlainObject(animations.categories) && !Array.isArray(animations.categories.keyframes)) {
  // Categories
  describe(`\n\n******************************\nCategories\n******************************\n`, () => {
    test(`to be valid categories object`, () => {
      expect(checkCategories(animations.categories)).toBe(true)
    })
  })
}
