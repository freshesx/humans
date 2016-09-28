import Vue from 'vue'

class Element {
  install (Vue) {
    Vue.prototype.$element = (Class, dom, wrapper) => {
      return this.create(Class, dom, wrapper)
    }
  }

  create (Class, dom, wrapper) {
    const Component = Vue.extend(Class)

    let component = new Component({
      el: wrapper || document.createElement('div')
    })

    component.$appendTo(dom || document.body)

    return component
  }
}

export default new Element()
