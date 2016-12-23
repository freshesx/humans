import { element } from '../util/element'
import Confirm from './confirm'
import Alert from './alert'
import Toastr from './toastr'

/**
 * Build component using Vue human element
 * @param  {Object}   options.Vue             Vue
 * @param  {Object}   options.ComponentClass  Some component class
 * @param  {Boolean}  options.show            show or hide, default hide
 * @return {Object}                           Vue component instance
 */
function buildComponent ({ Vue, ComponentClass }, options) {
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

  return component
}

export default {
  install (Vue) {
    /**
     * Custom popup element
     * @param  {Object} ComponentClass Vue component object
     * @param  {Object} options        Some settings
     * @return {Object}                Vue component instance
     */
    Vue.human.popup = (ComponentClass, options = {}) => {
      return buildComponent({ Vue, ComponentClass }, options)
    }

    /**
     * Confirm popup component
     * @param  {Object} options Some settings
     * @return {Object}
     */
    Vue.human.confirm = (options = {}) => {
      return Vue.human.popup(Confirm, options)
    }

    /**
     * Alert popup component
     * @param  {Object} options Some settings
     * @return {Object}
     */
    Vue.human.alert = (options = {}) => {
      return Vue.human.popup(Alert, options)
    }

    /**
     * Toastr popup component
     * @param  {Object} options Some settings
     * @return {Object}
     */
    Vue.human.toastr = (options = {}) => {
      return Vue.human.popup(Toastr, options)
    }
  }
}
