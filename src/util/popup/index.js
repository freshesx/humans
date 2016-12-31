import element from '../element'
import storage from './storage'

/**
 * Build component using Vue human element
 * @param  {Vue}        Vue
 * @param  {Vue}        ComponentClass
 * @param  {Boolean}    options
 * @return {VueComponent}
 */
export default function popup ({ Vue, ComponentClass }, options) {
  // Build component
  const component = element(ComponentClass, { Vue })

  // Change component data by options
  for (var variable in options) {
    if (options.hasOwnProperty(variable) && component.hasOwnProperty(variable) && variable !== 'close') {
      component[variable] = options[variable]
    }
  }

  component.$on('close', () => {
    if (options.close) {
      options.close.apply(component)
    } else {
      component.show = false
    }
  })

  storage.addItem(component)

  return component
}
