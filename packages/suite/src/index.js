/**
 * Wrap vue element to a suite. And add Vue.use plugin method
 * @example
 * import card from '@humans/card'
 * Vue.use(new Suite(card))
 */
export default class Suite {
  /**
   * @param {Object} vueElementsMap - e.g. { [card.name]: card }
   */
  constructor (vueElementsMap) {
    /**
     * @type {Object}
     */
    this.map = Object.assign({}, vueElementsMap)
  }

  /**
   * @param {Vue} Vue
   */
  install (Vue) {
    for (let name in this.map) {
      Vue.component(name, this.map[name])
    }
  }
}
