import share from './index.js'

/** @test {Share} */
describe('share', () => {
  const value = { name: 'mn-card' }

  /** @test {Share#set} */
  test('share.setLoading', () => {
    expect(share.setLoading(value)).toEqual(value)
  })

  /** @test {Share#get} */
  test('share.getLoading', () => {
    expect(share.getLoading()).toEqual(value)
  })
})
