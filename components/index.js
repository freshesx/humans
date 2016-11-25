import components from './components'
import element from './util/element'
import popup from './popup'
import scroller from './scroller'
import loading from './loading'
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
    cssPrefix: '',
    /**
     * Human load SVG, using it in load component
     * @type {String}
     */
    loadSvg: ''
  },
  /**
   * Vue install
   * @param  {Object} Vue
   * @param  {Object} options
   */
  install (Vue, options) {
    // Merge and assign options
    this.options = Object.assign({}, this.options, options)

    // Vue load components
    for (let name in components) {
      Vue.component(`${this.options.prefix}${name}`, components[name])
    }

    // Set up vue human
    Vue.human = {
      prefix: this.options.prefix,
      cssPrefix: this.options.cssPrefix,
      loadSvg: this.options.loadSvg
    }

    // Alias for human
    Vue.prototype.$human = Vue.human

    // Using human plugins
    Vue.use(scroller)
    Vue.use(element)
    Vue.use(popup)
    Vue.use(loading)
    Vue.use(browser)
  }
}
