import Datetime from './Datetime'

export default class DatetimeRange {
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

  showFromAt () {
    this.fromAtPopup = Datetime.create().show()
    this.fromAtPopup.$on('confirm', () => {
      this.fromAtPopup.close()
      setTimeout(() => {
        this.showToAt()
      }, 500)
    })
    this.fromAtPopup.$on('cancel', () => {
      this.fromAtPopup.close()
    })
    return this
  }

  showToAt () {
    this.toAtPopup = Datetime.create().show()
    this.toAtPopup.$on('confirm', () => {
      this.toAtPopup.close()
    })
    this.toAtPopup.$on('cancel', () => {
      this.toAtPopup.close()
      setTimeout(() => {
        this.showFromAt()
      }, 500)
    })
  }

  setFromAtConfig (config) {
    this.fromAtConfig = config
  }

  setToAtConfig (config) {
    this.toAtConfig = config
  }
}
