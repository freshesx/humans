import Vue from 'vue'
import Datetime from './Datetime'
import { addDay } from '../suites/datetime/dateChecker'

export default class DatetimeRange {
  fromAt

  toAt

  fromAtPopup

  toAtPopup

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
    this.fromAtPopup = Datetime.create({ ...this.fromAtConfig, ...options }).show()

    // Listen confirm
    this.fromAtPopup.$on('confirm', (display, fromAt) => {
      // Get computed datetime (fromAt)
      this.displayFromAt = display
      this.fromAt = fromAt

      setTimeout(() => {
        // 开始时间将作为结束时间的初始时间值
        this.showToAt({
          minAt: fromAt,
          currentAt: addDay(fromAt, 1)
        })
      }, 500)
    })

    return this
  }

  showToAt (options) {
    // Create popup
    this.toAtPopup = Datetime.create({ ...this.toAtConfig, ...options }).show()

    // Listen confirm
    this.toAtPopup.$on('confirm', (display, toAt) => {
      this.toAt = toAt
      this.displayToAt = display

      this.excuteConfirm()
    })

    // Listen cancel
    this.toAtPopup.$on('cancel', () => {
      setTimeout(() => {
        // 将保存好的 fromAt 的值传递回去
        this.showFromAt({ currentAt: this.fromAt })
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
}
