import './scss/bases.scss'
import Vuelidate from 'vuelidate'
import VueI18n from 'vue-i18n'
import defaultsDeep from 'lodash/defaultsDeep'
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
        Vue.locale(this.$vue.config.lang, defaultsDeep(...translations))
      })

    // Merge default screens and options screens
    this.$screens = [
      ...[
        { name: 'mobile', min: 0 },
        { name: 'tablet', min: 768 },
        { name: 'desktop', min: 992 },
        { name: 'widescreen', min: 1200 }
      ],
      ...Array.isArray(options.screens) ? options.screens : []
    ]
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
