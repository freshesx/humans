import Vue from 'vue'
import isUndefined from 'lodash/isUndefined'
import { addPopup, removePopup } from '../suites/popup/storage'

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
      throw new Error('没有配置 element')
    }

    // 创建 mixined element 实例
    const VueComponent = Vue.extend(this.element)
    const vueComponent = new VueComponent({ propsData: options }).$mount()

    // 监听 show 事件，判断是否打开或关闭
    vueComponent.$on('update:isShow', show => {
      vueComponent.$props.isShow = show

      if (!show) {
        setTimeout(() => {
          vueComponent.$destroy()
          this.remove()
        }, 3000)
      }
    })

    // 插入 body
    this.append(vueComponent)

    // Store component in popup storage
    this.store(vueComponent)

    // Object prop
    this.vueComponent = vueComponent

    return vueComponent
  }

  /**
   * When isNeedStore is true, store component in popup storage
   *
   * @param {vueComponent} vueComponent
   * @return {this}
   */
  store (vueComponent) {
    if (this.isNeedStore) {
      addPopup(vueComponent)
    }
    return this
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
   * Remove child wrap in DOM
   * @return {this}
   */
  remove () {
    if (!isUndefined(this.vueComponent)) {
      // Remove vueComponent from popup storage
      removePopup(this.vueComponent)

      // Remove component and wrapper
      if (this.wrapper) document.body.removeChild(this.wrapper)

      // Set undefined
      this.vueComponent = undefined
      this.wrapper = undefined
    }

    return this
  }
}
