/**
 * Wrap vue element to a suite. And add Vue.use plugin method
 */
export default class Suite {
  /**
   * @param {Object} vueElementsMap - e.g. { [card.name]: card }
   */
  constructor (vueElementsMap) {
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
