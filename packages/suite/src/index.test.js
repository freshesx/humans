import Suite from './index.js'

/** @test {Suite} */
describe('constructor', () => {
  const mnCard = {
    name: 'mn-card'
  }

  const mnCardItem = {
    name: 'mn-card-item'
  }

  const card = {
    [mnCard.name]: mnCard,
    [mnCardItem.name]: mnCardItem
  }

  /** @test {Suite#constructor} */
  test('Suite.constructor with empty object', () => {
    const suite = new Suite({})
    expect(suite.map).toEqual({})
  })

  /** @test {Suite#constructor} */
  test('Suite.constructor with elements map', () => {
    const suite = new Suite(card)
    expect(suite.map).toEqual(card)
  })

  /**
   * @test {Suite#install}
   */
  test('install', () => {
    // mock vue
    const Vue = {
      use (callback) {
        callback.install(Vue)
      },
      component (name, value) {
        expect(name).toEqual(value.name)
      }
    }

    Vue.use(new Suite(card))
  })
})
