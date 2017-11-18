import json from 'rollup-plugin-json'
import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import vue from 'rollup-plugin-vue2'
import scss from 'rollup-plugin-scss'
import packages from './packages'

export default packages.map(item => {
  return {
    input: `packages/${item}/src/index.js`,
    output: {
      file: `packages/${item}/dist/index.js`,
      format: 'cjs'
    },
    plugins: [
      vue(),
      scss({
        output: `packages/${item}/dist/index.css`
      }),
      json(),
      resolve(),
      babel({
        exclude: 'node_modules/**'
      })
    ],
    external: ['vue', 'lodash']
  }
})
