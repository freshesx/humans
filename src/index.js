import element from './util/element/plugins.js'
import browser from './util/browser/plugins.js'
import popup from './util/popup/plugins.js'
import scroller from './util/scroller/plugins.js'

export default {
  options: {
    /**
     * Human css prefix, using it in scss
     * @type {String}
     */
    cssPrefix: 'mn-',
    /**
     * Human load function
     * @example function (resolve) { require(['./file/path'], resolve) }
     * @type {Function}
     */
    loading: undefined,
    /**
     * Human icon array
     * @type {Array}
     */
    icons: {}
  },
  /**
   * Vue install
   * @param  {Object} Vue
   * @param  {Object} options
   */
  install (Vue, options) {
    this.$vue = Vue

    // Merge and assign options
    this.options = { ...this.options, options }

    // Set up vue human
    Vue.human = {
      cssPrefix: this.options.cssPrefix,
      loading: this.options.loading,
      icons: this.options.icons
    }

    // Alias for human
    Vue.prototype.$human = Vue.human

    // Using human plugins
    Vue.use(scroller)
    Vue.use(element)
    Vue.use(popup)
    Vue.use(browser)
  },
  add (VueComponent, name = VueComponent.name) {
    this.$vue.component(name, VueComponent)
  },
  use (VueComponents) {
    for (let name in VueComponents) {
      this.add(VueComponents[name])
    }
  }
}
