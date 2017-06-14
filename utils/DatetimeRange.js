import Vue from 'vue'
import Datetime from './Datetime'
import { addDay, addHours } from '../suites/datetime/dateChecker'

export default class DatetimeRange {
  fromAt

  toAt

  fromAtLayer

  toAtLayer

  fromAtConfig

  toAtConfig

  static fromAt (options = {}) {
    const instance = new this()
    instance.setFromAtConfig(options)
    return instance
  }

  toAt (options = {}) {
    this.setToAtConfig(options)
    return this
  }

  show () {
    return this.showFromAt()
  }

  showFromAt (options) {
    // Create popup
    this.fromAtLayer = Datetime.create({ ...this.fromAtConfig, ...options }).show()

    // Listen confirm
    this.fromAtLayer.on('confirm', (display, fromAt) => {
      // Get computed datetime (fromAt)
      this.displayFromAt = display
      this.fromAt = fromAt

      // 根据 fromAt 计算 toAt，增加一小时或一天
      const defaultToAt = this.fromAtLayer.vm.isTimeType
        ? addHours(fromAt, 1)
        : addDay(fromAt, 1)

      setTimeout(() => {
        // 开始时间将作为结束时间的初始时间值
        this.showToAt({
          min: fromAt,
          default: defaultToAt
        })
      }, 500)
    })

    return this
  }

  showToAt (options) {
    // Create popup
    this.toAtLayer = Datetime.create({ ...this.toAtConfig, ...options }).show()

    // Listen confirm
    this.toAtLayer.on('confirm', (display, toAt) => {
      this.toAt = toAt
      this.displayToAt = display

      this.excuteConfirm()
    })

    // Listen cancel
    this.toAtLayer.on('cancel', () => {
      setTimeout(() => {
        // 将保存好的 fromAt 的值传递回去
        this.showFromAt({ default: this.fromAt })
      }, 500)
    })
  }

  setFromAtConfig (config) {
    this.fromAtConfig = {
      title: Vue.t('mn.datetime.fromAtTitle'),
      confirmText: Vue.t('mn.datetime.next'),
      ...config
    }
  }

  setToAtConfig (config) {
    this.toAtConfig = {
      title: Vue.t('mn.datetime.toAtTitle'),
      cancelText: Vue.t('mn.datetime.prev'),
      smallerText: Vue.t('mn.datetime.smallerToAtText'),
      ...config
    }
  }

  change (callback) {
    this.callback = callback
    return this
  }

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
