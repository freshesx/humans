export function element (ComponentClass, { Vue, dom, wrapper }) {
  const Component = Vue.extend(ComponentClass)

  let component = new Component({
    el: wrapper || document.createElement('div')
  })

  appendTo(component, dom)

  return component
}

export function appendTo (component, dom) {
  dom = dom || document.body
  dom.appendChild(component.$el)
  return component
}

export default {
  install (Vue, options) {
    Vue.human.element = (ComponentClass, options) => {
      return element(ComponentClass, Object.assign({ Vue }, options))
    }
  }
}
