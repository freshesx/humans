import Vue from 'vue'
import loadingBarElement from '../suites/loadingBar/loadingBar'

export default class LoadingBar {
  /**
   * loadingBar 组件储存
   * @type {Object}
   */
  loadingBar

  /**
   * 构造函数
   * @method constructor
   *
   * @param {Object} options 初始化数据
   */
  constructor (options = {}) {
    const VueComponent = Vue.extend(loadingBarElement)
    const vueComponent = new VueComponent({ propsData: options }).$mount()
    document.body.appendChild(vueComponent.$el)
    this.loadingBar = vueComponent
  }

  /**
   * 定时触发
   * @method timeout
   *
   * @param  {Number} [millisecond=200] 定时时间
   * @return {Promise}
   */
  timeout (millisecond = 200) {
    return new Promise(resolve => setTimeout(resolve, millisecond))
  }

  /**
   * 调整加载条的位置
   * @method finish
   *
   * @param  {Number}  [percent=70]       加载条百分比，0 - 100
   * @param  {Number}  [processTime=1000] 加载条加载过程
   * @param  {Number}  [initTime=200]     加载条初始化时间
   * @return {Promise}
   */
  async finish (percent = 100, processTime = 1000, initTime = 0) {
    // 显示加载条
    this.loadingBar.$props.isShow = true
    this.loadingBar.$props.millisecond = processTime

    // 等待加载显示的初始化
    await this.timeout(initTime)

    // 启动加载条变化
    this.loadingBar.$props.percent = percent

    // 等待动画完成
    await this.timeout(processTime)

    // 还原初始化
    if (percent === 0 || percent === 100) {
      this.loadingBar.$props.isShow = false
      this.loadingBar.$props.millisecond = 0
      this.loadingBar.$props.percent = 0
    }
  }
}
