import './scss/bases.scss'
import Vuelidate from 'vuelidate'
import VueI18n from 'vue-i18n'
import merge from 'deepmerge'
import componentLocales from './locale'

export default {
  install (Vue, options = {}) {
    this.$vue = Vue

    // Vuelidate
    Vue.use(Vuelidate)

    // VueI18n
    Vue.use(VueI18n)

    // Set Vue config language
    Vue.config.lang = options.lang || 'zh-CN'

    // Use Promise all
    this.mergeLocals([ componentLocales, options.locales ])
      .then(translations => {
        Vue.locale(this.$vue.config.lang, merge.all(translations))
      })
  },

  mergeLocals (locales) {
    return Promise.all(locales.map(locale => this.addLocales(locale)))
  },

  addLocales (locales = []) {
    return new Promise(resolve => {
      let locale = locales.find(item => item.name === this.$vue.config.lang)

      if (!locale) {
        resolve({})
      } else if (typeof locale.translation === 'function') {
        locale.translation(file => {
          resolve(file.default)
        })
      } else {
        resolve(locale.translation)
      }
    })
  }
}
