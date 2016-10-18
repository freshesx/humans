import lodash from 'lodash'
import { createElement } from './util/element'
import { saveScroll, setScroll } from './scroller/save'
import components from './components'

export default {
  prefix: 'Mn',
  install (Vue, options) {
    // Assign default & options
    options = Object.assign({}, options)

    // Custom prefix
    if (lodash.isString(options.prefix)) {
      this.prefix = options.prefix
    }

    // Using components
    lodash.forEach(components, (component, name) => {
      Vue.component(`${this.prefix}${name}`, component)
    })

    // Adding scroll save & set
    Vue.human = {
      prefix: this.prefix,
      cssPrefix: '',
      saveScroll,
      setScroll,
      createElement (ComponentClass, options) {
        return createElement(ComponentClass, Object.assign({ Vue }, options))
      },
      confirm ({ show }) {
        const component = this.createElement(components.PopupConfirm)

        if (show) {
          component.show = true
        }

        return component
      },
      alert ({ show }) {
        const component = this.createElement(components.PopupAlert)

        if (show) {
          component.show = true
        }

        return component
      }
    }

    Vue.prototype.$human = Vue.human
  }
}
