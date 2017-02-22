import './scss/bases.scss'
import browser from './util/browser/plugins.js'

export default {
  /**
   * Vue install
   * @param  {Object} Vue
   * @param  {Object} options
   */
  install (Vue, options) {
    // Set global vue for Human
    this.$vue = Vue

    // Using human plugins
    Vue.use(browser)
  }
}
