import options from './index.js'

describe('options', () => {
  test('has allowed value', () => {
    options({ something: 100 })
    expect(options()).toEqual({ something: 100 })
  })
})
