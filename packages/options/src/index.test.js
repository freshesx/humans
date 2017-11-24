import options from './index.js'
import { Options } from './index.js'

const value = { name: 'mn-card' }

describe('options', () => {
  test('have the property', () => {
    expect(options.set('loading', value)).toEqual(value)
    expect(options.get('loading')).toEqual(value)
  })
})
