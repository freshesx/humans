import Suites from './index.js'

describe('constructor', () => {
  test('without vueElement', () => {
    const suites = new Suites()
    expect(suites.elements).toBe([])
  })
})
