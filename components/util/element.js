export function createElement (ComponentClass, { Vue, dom, wrapper }) {
  const Component = Vue.extend(ComponentClass)

  let component = new Component({
    el: wrapper || document.createElement('div')
  })

  dom = dom || document.body
  dom.appendChild(component.$el)

  return component
}

export default {
  install (Vue, options) {
    Vue.human.element = (ComponentClass, options) => {
      return createElement(ComponentClass, Object.assign({ Vue }, options))
    }
  }
}
