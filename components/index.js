import lodash from 'lodash'
import element from './util/element'
import { saveScroll, setScroll } from './scroller/save'
import components from './components'

export default {
  prefix: 'Mn',
  install (Vue, options) {
    // Custom prefix
    if (lodash.get(options, 'prefix')) {
      this.prefix = options.prefix
    }

    // Using components
    lodash.forEach(components, (value, key) => {
      Vue.component(`${this.prefix}${key}`, require(value))
    })

    // Using $element
    Vue.use(element)

    // Adding scroll save & set
    Vue.human = { saveScroll, setScroll }
  }
}
