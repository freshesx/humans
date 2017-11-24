import Suite from './index.js'
import Vue from 'vue'

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

describe('constructor', () => {
  test('empty object', () => {
    const suite = new Suite({})
    expect(suite.map).toEqual({})
  })

  test('has elements', () => {
    const suite = new Suite(card)
    expect(suite.map).toEqual(card)
  })
})

// @todo use Mock Function to rewrite Vue to test me deeply.
describe('install', () => {
  test('install', () => {
    Vue.use(new Suite(card))
  })
})
