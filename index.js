import './scss/bases.scss'
import Vuelidate from 'vuelidate'

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
  }
}
