import Vue from 'vue'
import Element from './Element'
import isUndefined from 'lodash/isUndefined'
import { addPopup } from '../components/popup/storage'

/** Class 弹出层控制类 */
export default class Popup {
  /**
   * 弹出层 element 类，如 messageElement
   * @type {Object}
   */
  element

  /**
   * 插入 body 的 wrapper 容器
   * @type {Node}
   */
  wrapper

  /**
   * Whether store instance component in popup storage.
   * If isNeedStore is true, this component will store in popup storage,
   * and close this component when $route change.
   * Mask component will set false.
   *
   * @type {Boolean}
   */
  isNeedStore = true

  /**
   * 工厂模式创建一个实例
   * @static
   * @param {Object} options
   * @return {vueComponent}
   */
  static create (options = {}) {
    const instance = new this()
    return instance.createComponent(options)
  }

  /**
   * 根据 element 创建一个 component 实例并插入 body
   * @param {Object} options
   * @return {vueComponent}
   */
  createComponent (options = {}) {
    if (isUndefined(this.element)) {
      return console.warn('没有配置 element')
    }

    // 创建 mixined element 实例
    const VueComponent = Vue.extend(this.getMixinedElement(options))
    const vueComponent = new VueComponent().$mount()

    // 监听 close 事件，和 remove
    vueComponent.$on('close', () => {
      setTimeout(() => {
        vueComponent.$destroy()
        this.remove()
      }, 3000)
    })

    // 插入 body
    this.append(vueComponent)

    if (this.isNeedStore) {
      addPopup(vueComponent)
    }

    return vueComponent
  }

  /**
   * 将 element 元素 mixin 入 options 参数
   * 实现 options 参数传递至 messageComponent
   * @param {Object} options
   * @return {Element}
   */
  getMixinedElement (options = {}) {
    const mixinedElement = new Element({
      mixins: [ this.element ],
      data () {
        return {
          ...options
        }
      }
    })

    return mixinedElement
  }

  /**
   * 将 vueComponent 插入 wrapper
   * @param {vueComponent} vueComponent
   * @return {this}
   */
  append (vueComponent) {
    this.wrapper = document.createElement('div')
    this.wrapper.id = `mn-popup-#${vueComponent._uid}`
    document.body.appendChild(this.wrapper)
    this.wrapper.appendChild(vueComponent.$el)
    return this
  }

  /**
   * 将 wrapper 移除 DOM
   * @return {this}
   */
  remove () {
    if (this.wrapper) {
      document.body.removeChild(this.wrapper)
    }
    return this
  }
}
