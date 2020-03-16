const runPuppeteer = () => {
  return new Promise(resolve => {
    const { execFileSync } = require('child_process')
    const response = execFileSync('node', [require('path').join(__dirname, 'puppeteer.js')])
    resolve(response.toString())
  })
}

describe(`\n\n******************************\nIntegration test\n******************************\n`, () => {
  it(`animations not to throw errors or warnings in browser`, () => {
    expect.assertions(1)
    return expect(runPuppeteer()).resolves.toEqual('')
  })
})
