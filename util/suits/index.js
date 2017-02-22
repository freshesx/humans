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

  install (Vue) {
    this.components.forEach(component => {
      if (component.install) {
        Vue.use(component)
      } else {
        if (!component.name) return console.warn('不存在 name')
        Vue.component(component.name, component)
      }
    })
  }
}
