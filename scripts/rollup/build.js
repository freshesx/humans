import json from 'rollup-plugin-json'
import babel from 'rollup-plugin-babel'
import vue from 'rollup-plugin-vue2'
import scss from 'rollup-plugin-scss'
import eslint from 'rollup-plugin-eslint'

export default {
  input: `packages/index.js`,
  output: [
    {
      file: `dist/main.esm.js`,
      format: 'es'
    }
  ],
  plugins: [
    vue(),
    scss({
      output: 'dist/main.css'
    }),
    eslint(),
    json(),
    babel({
      exclude: 'node_modules/**',
      plugins: [
        'external-helpers'
      ]
    })
  ],
  external: [
    'vue',
    '@freshes/icons'
  ]
}
