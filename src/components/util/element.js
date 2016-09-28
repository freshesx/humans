class Element {
  install (Vue) {
    Vue.prototype.$element = function (Class, DOM) {
      const Component = Vue.extend(Class)

      let component = new Component({
        el: document.createElement('div')
      })

      component.$appendTo(DOM || document.body)

      return component
    }
  }
}

export default new Element()
