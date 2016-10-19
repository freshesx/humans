import { createElement } from '../util/element'
import Confirm from './confirm'
import Alert from './alert'

function buildComponent ({ Vue, ComponentClass, show }) {
  const component = createElement(ComponentClass, { Vue })
  component.show = show
  return component
}

export default {
  install (Vue) {
    Vue.human.confirm = function (options) {
      return buildComponent(
        Object.assign(options, { Vue, ComponentClass: Confirm })
      )
    }

    Vue.human.alert = function (options) {
      return buildComponent(
        Object.assign(options, { Vue, ComponentClass: Alert })
      )
    }
  }
}
