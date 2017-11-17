import Datetime from './Datetime'
import { addDay, addHours } from '../suites/datetime/dateChecker'

export default class DatetimeRange {
  /**
   * 存储开始时间
   * @private
   * @type {Date}
   */
  fromAt

  /**
   * 存储结束时间
   * @private
   * @type {Date}
   */
  toAt

  /**
   * 存储开始时间的浮层
   * @private
   * @type {Layer}
   */
  fromAtLayer

  /**
   * 存储结束时间的浮层
   * @private
   * @type {Layer}
   */
  toAtLayer

  /**
   * 存储开始时间的配置
   * @private
   * @type {Object}
   */
  fromAtConfig

  /**
   * 存储结束时间的配置
   * @private
   * @type {Object}
   */
  toAtConfig

  /**
   * 静态方法创建实例化类，然后配置类的参数
   * @method create
   * @param  {Object} [fromPropsData={}] - 开始时间的配置数据
   * @param  {Object} [toPropsData={}]   - 结束时间的配置数据
   * @return {DatetimeRange}
   */
  static create (fromPropsData = {}, toPropsData = {}) {
    const instance = new this()
    instance.setFromAtConfig(fromPropsData)
    instance.setToAtConfig(toPropsData)
    return instance
  }

  /**
   * 请使用 create 方法实现，fromAt 方法即将弃用
   * 配置开始时间
   * @method fromAt
   * @param  {Object} [propsData={}]
   * @return {DatetimeRange}
   */
  static fromAt (propsData = {}) {
    console.warn('该 static fromAt 方法将被弃用，建议使用 create 实现。')
    const instance = new this()
    instance.setFromAtConfig(propsData)
    return instance
  }

  /**
   * 请使用 create 方法的第二个参数实现，toAt 方法即将弃用
   * @method toAt
   * @param  {Object} [propsData={}]
   * @return {DatetimeRange}
   */
  toAt (propsData = {}) {
    console.warn('该 toAt 方法将被弃用，建议使用 create 实现。')
    this.setToAtConfig(propsData)
    return this
  }

  /**
   * 显示浮层
   * @method show
   * @return {DatetimeRange}
   */
  show () {
    return this.showFromAt()
  }

  /**
   * 显示开始时间的浮层，并监听关闭
   * @method showFromAt
   * @param  {Object}   [propsData={}]
   * @return {DatetimeRange}
   */
  showFromAt (propsData = {}) {
    // 创建浮层，显示，并监听
    this.fromAtLayer = Datetime.create({
      ...this.fromAtConfig,
      ...propsData
    }).show().on('confirm', (display, formats) => {
      this.whenFromAtLayerHiding(display, formats)
    })

    return this
  }

  /**
   * 当 fromAt layer 隐藏时
   * @method whenFromAtLayerHiding
   * @param  {string}              display - 显示时间的字符串
   * @param  {Date}                fromAt
   * @return {Promise}
   */
  async whenFromAtLayerHiding (display, fromAt) {
    // 存储确认后的开始时间
    this.displayFromAt = display
    this.fromAt = fromAt

    // 根据 fromAt 计算 toAt，增加一小时或一天
    const isTimeType = this.fromAtLayer.vm.isTimeType
    const defaultToAt = isTimeType ? addHours(fromAt, 1) : addDay(fromAt, 1)

    // 等待 500 毫秒
    await this.timeout(500)

    // 开始时间将作为结束时间的初始时间值
    this.showToAt({ min: fromAt, default: defaultToAt })
  }

  /**
   * 定时器
   * @method timeout
   * @public
   * @param  {Number} [ms=1500]
   * @return {Promise}
   */
  timeout (ms = 1500) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  /**
   * 显示结束时间的浮层，并监听
   * @method showToAt
   * @param  {Object} [propsData={}]
   * @return {DatetimeRange}
   */
  showToAt (propsData = {}) {
    this.toAtLayer = Datetime.create({
      ...this.toAtConfig,
      ...propsData
    }).show().on('confirm', (display, toAt) => {
      this.whenConfirm(display, toAt)
    }).on('cancel', () => {
      this.whenToAtLayerHiding()
    })
    return this
  }

  /**
   * 当 toAt layer 隐藏时请求
   * @method whenToAtLayerHiding
   * @return {Promise}
   */
  async whenToAtLayerHiding () {
    await this.timeout(500)
    this.showFromAt({ default: this.fromAt })
  }

  /**
   * 当确认时间时请求
   * @method whenConfirm
   * @param  {string}    display   - 显示时间的字符串
   * @param  {Date}      toAt
   * @return {Promise}
   */
  async whenConfirm (display, toAt) {
    this.toAt = toAt
    this.displayToAt = display
    this.excuteConfirm()
  }

  /**
   * 设置开始时间的配置
   * @method setFromAtConfig
   * @param  {Object}        [propsData={}]
   */
  setFromAtConfig (propsData = {}) {
    this.fromAtConfig = {
      title: '选择开始时间',
      confirmText: '下一步',
      ...propsData
    }
  }

  /**
   * 设置结束时间的配置
   * @method setToAtConfig
   * @param  {Object}      [propsData={}] [description]
   */
  setToAtConfig (propsData = {}) {
    this.toAtConfig = {
      title: '选择结束时间',
      cancelText: '上一步',
      smallerText: '不可小于最小时间',
      ...propsData
    }
  }

  /**
   * 添加监听事件
   * @method change
   * @param  {Function} callback - 回调函数
   * @return {DatetimeRange}
   */
  change (callback) {
    this.callback = callback
    return this
  }

  /**
   * 执行确认
   * @method excuteConfirm
   * @return {undefined}
   */
  excuteConfirm () {
    if (this.callback) {
      this.callback({
        from: this.displayFromAt,
        to: this.displayToAt,
        fromAt: this.fromAt,
        toAt: this.toAt
      })
    }
  }

  /**
   * 新增销毁方法
   * @method destroy
   * @public
   * @return {DatetimeRange}
   */
  destroy () {
    if (this.fromAtLayer) this.fromAtLayer.destroy()
    if (this.toAtLayer) this.toAtLayer.destroy()
    return this
  }
}
