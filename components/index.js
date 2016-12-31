import components from './components'
import element from './util/element'
import popup from './popup/plugins.js'
import scroller from './scroller/plugins.js'
import browser from './util/browser'

export default {
  options: {
    /**
     * Vue human component prefix
     * @type {String}
     */
    prefix: 'Mn',
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
    // Merge and assign options
    this.options = Object.assign({}, this.options, options)

    // Set up vue human
    Vue.human = {
      prefix: this.options.prefix,
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

    // Vue load components
    for (let name in components) {
      Vue.component(`${this.options.prefix}${name}`, components[name])
    }
  }
}
