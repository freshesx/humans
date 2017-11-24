import Suite from './index.js'
import Vue from 'vue'

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
   * @todo use Mock Function to rewrite Vue to test me deeply.
   */
  test('install', () => {
    Vue.use(new Suite(card))
  })
})
