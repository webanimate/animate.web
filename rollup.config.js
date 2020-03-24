import { terser } from 'rollup-plugin-terser'
import * as pkg from './package.json'

export default {
  input: pkg.main,
  output: {
    file: `dist/${pkg.name}.js`,
    format: 'umd',
    name: pkg.name.replace('.', ''),
    sourcemap: true,
  },
  plugins: [
    terser({
      output: {
        preamble: `//${pkg.name} v${pkg.version} ${pkg.homepage}`,
      },
    }),
  ],
}
