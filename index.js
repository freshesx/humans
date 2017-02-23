import './scss/bases.scss'
import browser from './util/browser/plugins.js'
import Vuelidate from 'vuelidate'

export default {
  install (Vue, options) {
    this.$vue = Vue
    Vue.use(browser)
    Vue.use(Vuelidate)
  }
}
