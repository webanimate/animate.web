import { terser } from 'rollup-plugin-terser'
import * as pkg from './package.json'

const name = 'animate.web'

export default {
  input: pkg.main,
  output: {
    file: `dist/${name}.js`,
    format: 'umd',
    name: name.replace('.', ''),
    sourcemap: true
  },
  plugins: [
    terser({
      output: {
        preamble: `//${pkg.name} v${pkg.version} ${pkg.homepage}`
      }
    })
  ]
}
