import virtual from '@rollup/plugin-virtual'
import { terser } from 'rollup-plugin-terser'
import * as pkg from './package.json'
import animateweb from './src/index.js'

const animations = []
Object.keys(animateweb).forEach(key => {
  animations.push(key)
})

export default animations.map(name => ({
  input: 'src/entry.js',
  output: {
    file: `dist/${name}.js`,
    format: 'umd',
    name: `${pkg.name.replace('.', '')}.${name}`,
    sourcemap: true
  },
  plugins: [
    virtual({
      'src/entry.js': `export default ${JSON.stringify(animateweb[name])}`
    }),
    terser({
      output: {
        preamble: `//${pkg.name} v${pkg.version} ${pkg.homepage}`
      }
    })
  ]
}))
