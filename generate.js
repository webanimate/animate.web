const fs = require('fs')
const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'))
const readline = require('readline')
const buffer = []
const searchObjects = [
  {
    search: '<title>',
    replace: pkg.name.charAt(0).toUpperCase() + pkg.name.slice(1) + '</title>',
  },
  {
    search: '<script src="dist/',
    replace: pkg.name + '.js"></script>',
  },
  {
    search: '/* global Vue, Quasar, animatable, ',
    replace: pkg.outputName + ' */',
  },
  {
    search: 'const animationsSet = ',
    replace: pkg.outputName,
  },
  {
    search: "this.packageName = '",
    replace: pkg.name + "'",
  },
  {
    search: "this.githubUsername = '",
    replace: new URL(pkg.homepage).pathname.split('/')[1] + "'",
  },
]

async function processLineByLine() {
  const fileStream = fs.createReadStream('index.html')

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  })

  for await (let line of rl) {
    searchObjects.forEach((obj) => {
      const substr = line.indexOf(obj.search)
      if (substr >= 0) {
        line = line.substring(0, substr + obj.search.length) + obj.replace
      }
    })
    buffer.push(line)
  }

  fileStream.once('close', () => {
    const stream = fs.createWriteStream('index.html')
    stream.once('open', () => {
      buffer.forEach((key) => {
        stream.write(`${key}\n`)
      })
      stream.end()
    })
  })
}

processLineByLine()
