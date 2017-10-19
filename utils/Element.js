/** Class 封装 vue component export */
export default class Element {
  /**
   * 构造函数，合并传入的 vue 配置和 this
   * @param {Object} vueElement vue 组件的配置对象
   */
  constructor (vueElement) {
    Object.assign(this, vueElement)
  }

  /**
   * vue.use() 需要的 install 方法
   * @param {Vue} Vue
   * @param {Object} [options={}]
   * @return {void}
   */
  install (Vue, options = {}) {
    if (this.beforeInstalled) {
      this.beforeInstalled(Vue, options)
    }

    Vue.component(this.name, this)

    if (this.afterInstalled) {
      this.afterInstalled(Vue, options)
    }
  }

  /**
   * For components
   *
   * @return {Object}
   */
  insert () {
    return {
      [this.name]: this
    }
  }

  /**
   * For components
   * Because vue 2.5 add inject method,
   * so this conflict with the Element.prototype.inject.
   * We rename inject method to insert method,
   * and inject is insert alias,
   * but just use inject method below vue 2.5.x (e.g. vue 2.4.2).
   * @return {Object}
   */
  inject () {
    console.warn('You must rename inject to insert. You can\' use inject method at vue 2.5')
    return this.insert()
  }
}
