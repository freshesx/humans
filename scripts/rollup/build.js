import json from 'rollup-plugin-json'
import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import vue from 'rollup-plugin-vue2'
import scss from 'rollup-plugin-scss'
import eslint from 'rollup-plugin-eslint'
import packages from './packages'
import dependencies from './dependencies'

export default packages().map(item => {
  return {
    input: `packages/${item}/src/index.js`,
    output: [
      {
        file: `packages/${item}/dist/main.common.js`,
        format: 'cjs'
      },
      {
        file: `packages/${item}/dist/main.esm.js`,
        format: 'es'
      }
    ],
    plugins: [
      resolve({
        customResolveOptions: {
          moduleDirectory: 'packages'
        }
      }),
      vue(),
      scss({
        output: `packages/${item}/dist/main.css`
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
    external: [].concat(dependencies(item))
  }
})
