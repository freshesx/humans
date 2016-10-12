import lodash from 'lodash'
import element from './util/element'
import components from './components'

export default {
  prefix: 'Mn',
  install (Vue, options) {
    // Custom prefix
    if (lodash.get(options, 'prefix')) {
      this.prefix = options.prefix
    }

    lodash.forEach(components, (value, key) => {
      Vue.component(`${this.prefix}${key}`, require(value))
    })

    Vue.use(element)
  }
}
