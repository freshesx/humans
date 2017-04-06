import Vue from 'vue'
import isUndefined from 'lodash/isUndefined'

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

    // 创建 element 实例
    const el = document.createElement('div')
    const VueComponent = Vue.extend(this.element)
    const vueComponent = new VueComponent({ el })

    // 将变量 mixins
    Object.keys(options).forEach(propName => {
      if (vueComponent.hasOwnProperty(propName)) {
        vueComponent[propName] = options[propName]
      }
    })

    // 监听 close 事件，和 remove
    vueComponent.$on('close', () => {
      setTimeout(() => {
        vueComponent.$destroy()
        this.remove()
      }, 3000)
    })

    // 插入 body
    this.append(vueComponent)

    return vueComponent
  }

  /**
   * 将 vueComponent 插入 wrapper
   * @param {vueComponent} vueComponent
   * @return {this}
   */
  append (vueComponent) {
    this.wrapper = document.createElement('div')
    this.wrapper.id = `notification_${vueComponent._uid}`
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
