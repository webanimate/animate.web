const runPuppeteer = () => {
  return new Promise(resolve => {
    resolve(
      require('child_process')
        .execFileSync('node', [require('path').join(__dirname, 'puppeteer.js')])
        .toString()
    )
  })
}

describe(`\n\n******************************\nIntegration test\n******************************\n`, () => {
  it(`animations not to throw errors or warnings in browser`, () => {
    expect.assertions(1)
    return expect(runPuppeteer()).resolves.toEqual('')
  })
})
