import animations from '../src/index'
import { properties } from 'animatable-properties'
import { validate } from 'waapi-timing-properties'
import isPlainObject from 'lodash.isplainobject'

const keyframesAllowedAttributes = [...properties, ...['offset', 'easing', 'composite']]

const checkCategories = categories => {
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

Object.keys(animations).forEach(key => {
  if (Array.isArray(animations[key].keyframes)) {
    describe(`\n\n******************************\n${key} animation\n******************************\n`, () => {
      // Keyframes
      describe(`keyframes`, () => {
        const keyframesOffset = []
        const keyframesEasings = []
        const keyframesComposites = []
        describe(`to contain only alowed attributes`, () => {
          animations[key].keyframes.forEach((keyframe, index) => {
            const keyframesAttributes = []
            Object.keys(keyframe).forEach(attribute => {
              keyframesAttributes.push(attribute)
              if (attribute === 'offset' && keyframe[attribute] !== null) {
                keyframesOffset.push(keyframe[attribute])
              }
              if (attribute === 'easing') {
                keyframesEasings.push(keyframe[attribute])
              }
              if (attribute === 'composite') {
                keyframesComposites.push(keyframe[attribute])
              }
            })
            test(`${index}: ${keyframesAttributes}`, () => {
              expect(keyframesAllowedAttributes).toEqual(expect.arrayContaining(keyframesAttributes))
            })
          })
        })

        // Offsets
        if (keyframesOffset.length > 0) {
          describe(`offsets`, () => {
            describe(`to be number between 0 and 1`, () => {
              keyframesOffset.forEach((value, index) => {
                test(`${index}: ${value}`, () => {
                  expect(value).toEqual(expect.any(Number))
                  expect(value).toBeGreaterThanOrEqual(0)
                  expect(value).toBeLessThanOrEqual(1)
                })
              })
            })
            describe(`to be in ascending order`, () => {
              keyframesOffset.forEach((value, index) => {
                if (index > 0) {
                  test(`${index}: ${value} >= ${keyframesOffset[index - 1]}`, () => {
                    expect(value).toBeGreaterThanOrEqual(keyframesOffset[index - 1])
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
