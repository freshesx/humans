import Vue from 'vue'
import isUndefined from 'lodash/isUndefined'

export default class Notification {

  element

  wrapper

  static create (options = {}) {
    const instance = new this()
    console.log(instance)
    const vueComponent = instance.createComponent(options)
    return vueComponent
  }

  createComponent (options = {}) {
    if (isUndefined(this.element)) {
      return console.warn('没有配置 element')
    }

    const el = document.createElement('div')
    const VueComponent = Vue.extend(this.element)
    const vueComponent = new VueComponent({ el })

    Object.keys(options).forEach(propName => {
      if (vueComponent.hasOwnProperty(propName)) {
        vueComponent[propName] = options[propName]
      }
    })

    vueComponent.$on('close', () => {
      setTimeout(() => {
        vueComponent.$destroy()
        this.remove()
      }, 3000)
    })

    this.append(vueComponent)

    return vueComponent
  }

  append (vueComponent) {
    this.wrapper = document.createElement('div')
    this.wrapper.id = `notification_${vueComponent._uid}`
    document.body.appendChild(this.wrapper)
    this.wrapper.appendChild(vueComponent.$el)
  }

  remove () {
    if (this.wrapper) {
      document.body.removeChild(this.wrapper)
    }
  }
}
