import Suits from './util/suits'
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
      return console && console.warn('可能没有执行 Vue.use(VueHuman) 来初始化。')
    }

    this.$vue.component(name, VueComponent)
  },

  /**
   * @param {Suits} suits
   */
  addSuits (suits) {
    if (!suits instanceof Suits) return console.warn('必须是 Suits 的实例')
    suits.getComponents().forEach(item => this.register(item))
  },

  /**
   * @param {Object} component
   * @param {String} name
   */
  addComponent (component, name = undefined) {
    if (typeof component !== 'object') return console.warn('必须是对象')
    this.register(component, name)
  }
}
