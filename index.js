import './scss/bases.scss'
import Vuelidate from 'vuelidate'
import VueI18n from 'vue-i18n'
import defaultsDeep from 'lodash/defaultsDeep'
import componentLocales from './locale'

/**
 * Human 的入口方法，用于 Vue.use() 加载 vue-human
 * @example
 * import Vue from 'vue'
 * import human from 'vue-human'
 * import locale from './locale'
 * Vue.use(human, { locale })
 * @module index
 */
export default {
  /**
   * Vue 要求的方法；
   * 配置 Vue、 Vuelidate、VueI18n 验证和多语言。
   * @public
   * @param {Vue} Vue - Vue 的实例
   * @param {Object} [options = {}] - 配置参数
   * @return {void}
   */
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

  /**
   * 返回一个 Promise 用于加载所有的多语言文件
   * @protected
   * @param {Array} locales - 多语言表集合
   * @return {Promise}
   */
  mergeLocals (locales) {
    return Promise.all(locales.map(locale => this.addLocales(locale)))
  },

  /**
   * 将一个具体的语言内容的对象表异步加载入程序
   * @protected
   * @param {Array} [locales = []] - 多语言表集合
   * @param {Object} locales[].locale - 某一个多语言对象
   * @param {String} locales[].locale.name - 当前多语言的名称
   * @param {Function|Object} locales[].locale.translation - 当前多语言的内容
   * @return {Promise}
   */
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
