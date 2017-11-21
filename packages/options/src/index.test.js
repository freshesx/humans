import options from './index.js'

const value = { name: 'custom-loading-icon' }

describe('options', () => {
  test('have the property', () => {
    expect(options.set('loading', value)).toEqual(value)
    expect(options.get('loading')).toEqual(value)
  })

  test('have\'t the property', () => {
    expect(() => {
      options.set('test', {})
    }).toThrow('The options haven\'t test property.')
  })
})
