import Datetime from './Datetime'
import Message from './Message'
import { formatStandrad, addDay } from '../suites/datetime/dateChecker'

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
    this.fromAtPopup.$on('confirm', (fromAt) => {
      // Get computed datetime (fromAt)
      this.fromAt = fromAt
      this.fromAtPopup.close()

      setTimeout(() => {
        // 开始时间将作为结束时间的初始时间值
        this.showToAt({ fromAt: addDay(fromAt, 1) })
      }, 500)
    })

    // Listen cancel
    this.fromAtPopup.$on('cancel', () => {
      this.fromAtPopup.close()
    })

    return this
  }

  showToAt (options) {
    // Create popup
    this.toAtPopup = Datetime.create({ ...this.toAtConfig, ...options }).show()

    // Listen confirm
    this.toAtPopup.$on('confirm', (toAt) => {
      // 开始时间是否大于等于结束时间，则错误
      if (this.fromAt >= toAt) {
        Message.create({ type: 'error', message: '结束时间应晚于开始时间' }).show()
        return
      }

      this.toAt = toAt
      this.toAtPopup.close()
      this.excuteConfirm()
    })

    // Listen cancel
    this.toAtPopup.$on('cancel', () => {
      this.toAtPopup.close()
      setTimeout(() => {
        // 将保存好的 fromAt 的值传递回去
        this.showFromAt({ fromAt: this.fromAt })
      }, 500)
    })
  }

  setFromAtConfig (config) {
    this.fromAtConfig = {
      title: '选择开始时间',
      confirmText: '下一步',
      ...config
    }
  }

  setToAtConfig (config) {
    this.toAtConfig = {
      title: '选择结束时间',
      cancelText: '上一步',
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
        from: formatStandrad(this.fromAt),
        to: formatStandrad(this.toAt),
        fromAt: this.fromAt,
        toAt: this.toAt
      })
    }
  }
}
