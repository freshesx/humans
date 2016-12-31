export default function element (ComponentClass, {
  Vue, dom = document.body, wrapper = document.createElement('div') }) {
  // Create Vue component object
  const Component = Vue.extend(ComponentClass)
  // Instance
  let component = new Component({ el: wrapper })
  // Append to some dom
  dom.appendChild(component.$el)

  return component
}
