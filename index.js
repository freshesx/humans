import './scss/bases.scss'
import Vuelidate from 'vuelidate'

export default {
  install (Vue, options) {
    this.$vue = Vue
    Vue.use(Vuelidate)
  }
}
