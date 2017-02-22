/**
 * @class Suits
 */
export default class Suits {
  /**
   * @var {Array}
   */
  components = []

  /**
   * Build components for suits
   * @param {Array} components
   */
  constructor (components) {
    components.forEach(item => {
      let items = item instanceof Suits
        ? item.getComponents()
        : item

      this.components = this.components.concat(items)
    })
  }

  /**
   * Return components storage
   *
   * @return {Array}
   */
  getComponents () {
    return this.components
  }
}
