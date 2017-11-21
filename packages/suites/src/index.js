export default class Suites {
  /**
   * @param {Array} vueElements
   * @param {Object} vueElements[].vueElement
   */
  constructor (vueElements) {
    this.elements = [].concat(vueElements || [])
  }

  /**
   * @return {Object}
   */
  map () {
    const elements = {}

    this.elements.forEach(element => {
      elements[element.name] = element
    })

    return elements
  }

  /**
   * @param {Vue} Vue
   */
  install (Vue) {
    this.elements.forEach(element => {
      Vue.component(element.name, element)
    })
  }
}
