export default class Element {

  constructor (options) {
    Object.assign(this, options)
  }

  install (Vue, options = {}) {
    if (this.beforeInstalled) {
      this.beforeInstalled(Vue, options)
    }

    Vue.component(this.name, this)

    if (this.afterInstalled) {
      this.afterInstalled(Vue, options)
    }
  }
}
