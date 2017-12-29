import Vue from 'vue'

/**
 * Layer last z-index storage
 * @private
 * @type {number}
 */
let zIndex = 8000

/**
 * Layer class
 */
export default class Layer {
  constructor () {
    /**
     * Specifily vue element
     * @type {Object}
     */
    this.element = undefined

    /**
     * vueComponent within a wrapper
     * @type {DOM}
     */
    this.wrapper = undefined

    /**
     * Forget
     * @type {boolean}
     */
    this.forget = undefined
  }

  /**
   * Create a new layer
   * @param  {Object} propsData  - Vue propsData
   * @return {Layer}             - Layer
   */
  static create (propsData) {
    const instance = new this()
    return instance.createComponent(propsData)
  }

  /**
   * create vueComponent
   * @param  {Object} propsData  - Vue propsData
   * @return {Layer}
   */
  createComponent (propsData) {
    if (typeof this.element === 'undefined') {
      throw new Error('The this.element should be a vue element.')
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
   * Merge propsData default value
   * @protected
   * @param  {Object} propsData  - vue propsData
   * @return {Object}
   */
  mergePropsData (propsData) {
    return Object.assign({}, {
      zIndex: this.generateZindex()
    }, propsData)
  }

  /**
   * Generate zIndex
   * @private
   * @return {number}
   */
  generateZindex () {
    zIndex += 10
    return zIndex
  }

  /**
   * Listen vueComponent's update:visible event
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
   * Wrap vueComponent and append to body
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
   * Destroy vueComponent and remove wrapper from body
   * @protected
   * @return {Layer}
   */
  remove () {
    if (typeof this.vm !== 'undefined') {
      this.vm.$destroy()
      this.removeWrapper()
    }
    this.vm = undefined
    this.wrapper = undefined
    return this
  }

  /**
   * Remove wrapper
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
   * Show vueComponent
   * @return {Layer}
   */
  show () {
    if (!this.vm) throw new Error('vueComponent is already destroyed.')
    this.vm.$props.visible = true
    return this
  }

  /**
   * Hide vueComponent, and then destroy it.
   * @return {Promise}
   */
  destroy () {
    return new Promise(resolve => {
      if (this.vm) {
        this.vm.$props.visible = false

        setTimeout(() => {
          this.remove()
          resolve(this)
        }, 1500)
      }

      resolve(this)
    })
  }

  /**
   * Wrap vm.$on event, and return this
   * @param  {string}   name       - event name from vueComponent
   * @param  {Function} callback   - pass callback to vueComponent
   * @return {Layer}
   */
  on (name, callback) {
    this.vm.$on(name, callback)
    return this
  }
}
