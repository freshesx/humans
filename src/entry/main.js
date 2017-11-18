import '../scss/bases.scss'
// import Vuelidate from 'vuelidate'
import baseOptions from './options'

export default {
  /**
   * vue install
   * @param {Vue} Vue
   * @param {Object} [options = {}]
   * @return {void}
   */
  install (Vue, options = {}) {
    // Vuelidate
    // Vue.use(Vuelidate)

    // merge base and custom options
    const mnOptions = Object.assign({}, baseOptions, options)
    Vue.mnOptions = Vue.prototype.$mnOptions = mnOptions
  }
}
