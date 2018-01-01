import share from './index.js'

/** @test {Share} */
describe('share', () => {
  const value = { name: 'mn-card' }
  const screens = [{ name: 'mobile', min: 0 }]

  /** @test {Share#setLoading} */
  test('#setLoading', () => {
    expect(share.setLoading(value)).toEqual(value)
  })

  /** @test {Share#getLoading} */
  test('#getLoading', () => {
    expect(share.getLoading()).toEqual(value)
  })

  /** @test {Share#setScreens} */
  test('#setScreens', () => {
    expect(share.setScreens(screens)).toEqual(screens)
  })

  /** @test {Share#getScreens} */
  test('#getScreens', () => {
    expect(share.getScreens()).toEqual(screens)
  })
})
