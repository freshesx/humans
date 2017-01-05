import Confirm from '../../components/popup/confirm'
import Alert from '../../components/popup/alert'
import Message from '../../components/popup/message'
import popup from './index.js'

export default {
  install (Vue) {
    /**
     * Custom popup element
     * @param  {Object} ComponentClass Vue component object
     * @param  {Object} options        Some settings
     * @return {Object}                Vue component instance
     */
    Vue.human.popup = (ComponentClass, options = {}) => {
      return popup({ Vue, ComponentClass }, options)
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
      console && console.warn('建议使用 this.$human.message 取代 this.$human.toastr。')
      return Vue.human.popup(Message, options)
    }

    /**
     * Message using Toastr popup component
     * @param  {Object} options Some settings
     * @return {Object}
     */
    Vue.human.message = (options = {}) => {
      return Vue.human.popup(Message, options)
    }
  }
}
