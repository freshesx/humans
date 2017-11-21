import Suites from './index.js'
import Vue from 'vue'

const vueElement = {
  name: 'mn-test'
}

describe('constructor', () => {
  test('without vueElement', () => {
    const suites = new Suites()
    expect(suites.elements).toEqual([])

    const map = suites.map()
    expect(map).toEqual({})
  })

  test('with vueElement', () => {
    const suites = new Suites([ vueElement ])
    expect(suites.elements).toEqual([ vueElement ])

    const map = suites.map()
    expect(map).toEqual({ 'mn-test': vueElement })
  })
})

// @todo use Mock Function to rewrite Vue to test me deeply.
describe('install', () => {
  test('install', () => {
    const suites = new Suites([ vueElement ])
    Vue.use(suites)
  })
})
