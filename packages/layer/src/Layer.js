import Vue from 'vue'

/**
 * 浮层的 zIndex 存储值
 * @private
 * @type {number}
 */
let zIndex = 8000

/**
 * 控制浮层的类
 * @class
 */
export default class Layer {
  constructor () {
    /**
     * 存储 element
     * @type {Object}
     */
    this.element = undefined

    /**
     * 插入 body 的 vueComponent 的包裹器
     * @type {DOM}
     */
    this.wrapper = undefined

    /**
     * 是否忘记存储
     * @type {boolean}
     */
    this.forget = undefined
  }

  /**
   * 工厂模式创建
   * @method create
   * @static
   * @public
   * @param  {Object} propsData  - 属性的数据
   * @return {Layer}             - utils/Layer
   */
  static create (propsData) {
    const instance = new this()
    return instance.createComponent(propsData)
  }

  /**
   * 创建 vueComponent
   * @method createComponent
   * @public
   * @param  {Object}        propsData
   * @return {Layer}
   */
  createComponent (propsData) {
    if (typeof this.element === 'undefined') {
      throw new Error('没有配置 element')
    }

    const VueComponent = Vue.extend(this.element)
    const vueComponent = new VueComponent({
      propsData: this.mergePropsData(propsData)
    }).$mount()

    this.listen(vueComponent)
    this.append(vueComponent)
    this.vm = vueComponent
    return this
  }

  /**
   * 合并 propsData 的默认值
   * @method mergePropsData
   * @protected
   * @param  {Object}       propsData
   * @return {Object}
   */
  mergePropsData (propsData) {
    return Object.assign({}, {
      zIndex: this.generateZindex()
    }, propsData)
  }

  /**
   * 生成 zIndex
   * @method generateZindex
   * @private
   * @return {number}
   */
  generateZindex () {
    zIndex += 10
    return zIndex
  }

  /**
   * 监听 vueComponent 的 update:visible 触发事件
   * @method listen
   * @protected
   * @param  {VueComponent} vueComponent
   * @return {Layer}
   */
  listen (vueComponent) {
    vueComponent.$on('update:visible', visible => {
      visible ? this.open() : this.destroy()
    })
    return this
  }

  /**
   * 包裹 wrapper 并插入 body
   * @protected
   * @method append
   * @param  {VueComponent} vueComponent
   * @return {Layer}
   */
  append (vueComponent) {
    this.wrapper = document.createElement('div')
    this.wrapper.id = `mn-popup-#${vueComponent._uid}`
    document.body.appendChild(this.wrapper)
    this.wrapper.appendChild(vueComponent.$el)
    return this
  }

  /**
   * 从 body 内移除 wrapper 和 vueComponent
   * @method remove
   * @protected
   * @return {Layer}
   */
  remove () {
    if (typeof this.vm === 'undefined') {
      this.vm.$destroy()
      this.removeWrapper()
    }
    this.vm = undefined
    this.wrapper = undefined
    return this
  }

  /**
   * 移除 wrapper
   * @method removeWrapper
   * @protected
   * @return {Layer}
   */
  removeWrapper () {
    if (this.wrapper) {
      document.body.removeChild(this.wrapper)
    }
    return this
  }

  /**
   * 显示 vueComponent
   * @method show
   * @public
   * @return {Layer}
   */
  show () {
    if (!this.vm) throw new Error('vueComponent 已经被销毁。')
    this.vm.$props.visible = true
    return this
  }

  /**
   * 先关闭后销毁 vueComponent
   * @public
   * @method destroy
   * @return {Promise}
   */
  async destroy () {
    if (this.vm) {
      this.vm.$props.visible = false
      await this.timeout()
      return this.remove()
    }
    return this
  }

  /**
   * 定时器
   * @method timeout
   * @public
   * @param  {Number} [ms=3000]
   * @return {Promise}
   */
  timeout (ms = 1500) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  /**
   * 封装 vm.$on 方法，返回 this，实现操作链
   * @method on
   * @param  {string}   name       - 事件名称
   * @param  {Function} callback
   * @return {Layer}
   */
  on (name, callback) {
    this.vm.$on(name, callback)
    return this
  }
}
