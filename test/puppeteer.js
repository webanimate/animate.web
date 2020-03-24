const pkg = require('../package.json')
const animations = require(`../dist/${pkg.name}`)

const animationsNames = []
Object.keys(animations).forEach((key) => {
  if (!(key === 'categories' && !Array.isArray(animations[key].keyframes))) {
    animationsNames.push(key)
  }
})

const puppeteer = require('puppeteer')

;(async () => {
  let _animation = ''
  let _error = ''
  const selector = '#animationName input:first-child'
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  page.on('console', (msg) => {
    if (msg._type === 'warning') {
      _error = msg._text
    } else {
      _error = msg._args[0]._remoteObject.description
    }
    process.stdout.write(`\nAnimation: ${_animation}\nError: ${_error}`)
  })

  await page.goto(`file:${require('path').join(__dirname, '..', 'index.html')}`)
  await page.waitForSelector(selector)
  await page.focus(selector)

  for (const animation of animationsNames) {
    if (_error) break
    _animation = animation
    await page.keyboard.down('Control')
    await page.keyboard.press('A')
    await page.keyboard.up('Control')
    await page.keyboard.press('Backspace')
    await page.keyboard.type(animation)
    await page.keyboard.press('ArrowDown')
    await page.keyboard.press('Enter')
  }

  try {
    await browser.close()
  } catch (err) {
    console.error(err)
  }
})()
