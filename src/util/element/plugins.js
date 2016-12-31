import element from './index.js'

export default {
  install (Vue, options) {
    Vue.human.element = (ComponentClass, options) => {
      return element(ComponentClass, { Vue, ...options })
    }
  }
}
