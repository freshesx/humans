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
        const confirm = this.createElement(components.Confirm)

        if (show) {
          confirm.show = true
        }

        return confirm
      }
    }

    Vue.prototype.$human = Vue.human
  }
}
