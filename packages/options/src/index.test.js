import options from './index.js'

/** @test {Options} */
describe('options', () => {
  const value = { name: 'mn-card' }

  /** @test {Options#set} */
  test('options.set', () => {
    expect(options.set('loading', value)).toEqual(value)
  })

  /** @test {Options#get} */
  test('options.get', () => {
    expect(options.get('loading')).toEqual(value)
  })
})
