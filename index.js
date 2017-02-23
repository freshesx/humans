import './scss/bases.scss'
import browser from './util/browser/plugins.js'

export default {
  install (Vue, options) {
    this.$vue = Vue
    Vue.use(browser)
  }
}
