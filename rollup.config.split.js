import virtual from '@rollup/plugin-virtual'
import { terser } from 'rollup-plugin-terser'
import * as pkg from './package.json'
import animateweb from './src/index.js'

// Clean dist folder
const path = require('path')
const rimraf = require('rimraf')
require('fs')
  .readdirSync(path.join(__dirname, 'dist'))
  .forEach((file) => {
    if (![`${pkg.name}.js`, `${pkg.name}.js.map`].includes(file)) {
      rimraf(path.join(__dirname, 'dist', file), { disableGlob: true }, (err) => {
        if (err) throw err
      })
    }
  })

const animations = []
Object.keys(animateweb).forEach((key) => {
  animations.push(key)
})

export default animations.map((name) => ({
  input: 'src/entry.js',
  output: {
    file: `dist/${name}.js`,
    format: 'umd',
    name: `${pkg.outputName}.${name}`,
    sourcemap: true,
  },
  plugins: [
    virtual({
      'src/entry.js': `export default ${JSON.stringify(animateweb[name])}`,
    }),
    terser({
      output: {
        preamble: `//${pkg.name} v${pkg.version} ${pkg.homepage}`,
      },
    }),
  ],
}))
