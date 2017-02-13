import browser from './util/browser/plugins.js'
import './scss/bases.scss'

export default {
  /**
   * Vue install
   * @param  {Object} Vue
   * @param  {Object} options
   */
  install (Vue, options) {
    this.$vue = Vue

    // Using human plugins
    Vue.use(browser)
  },
  /**
   * Register VueComponent to Vue
   *
   * @param {VueComponent}   VueComponent
   * @param {String}         name
   */
  register (VueComponent, name = VueComponent.name) {
    if (!this.$vue) {
      console && console.warn('可能没有执行 Vue.use(VueHuman) 来初始化。')
    }

    this.$vue.component(name, VueComponent)
  },
  /**
   * Add lots or one of VueComponent to Vue
   *
   * @param {Array|VueComponent}   components
   * @param {String}               name
   */
  add (components, name) {
    if (typeof components !== 'object') {
      console && console.warn('传递的 component 存在错误。')
    }

    if (components instanceof Array) {
      components.forEach(item => this.register(item))
    } else {
      this.register(components, name)
    }
  }
}
