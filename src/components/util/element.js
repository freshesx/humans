export default {
  install (Vue) {
    this.vue = Vue

    Vue.prototype.$element = (Class, dom, wrapper) => {
      return this.create(Class, dom, wrapper)
    }
  },
  create (Class, dom, wrapper) {
    const Component = this.vue.extend(Class)

    let component = new Component({
      el: wrapper || document.createElement('div')
    })

    dom = dom || document.body
    dom.appendChild(component.$el)

    return component
  }
}
