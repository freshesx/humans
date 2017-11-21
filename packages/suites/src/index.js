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
    // Return multi VueComponents Object
    return this.elements.map(element => {
      // Register Vue Componentt
      return {
        name: element.name,
        component: Vue.component(element.name, element)
      }
    })
  }
}
