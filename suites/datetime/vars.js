import isUndefined from 'lodash/isUndefined'

export default {
  data () {
    return {
      fromAt: undefined, // 初始开始时间
      toAt: undefined, // 初始结束时间
      type: 'single',  // 'single', 'range'
      minAt: new Date('1970-01-01 00:00:00'),  // 最小时间
      maxAt: new Date('2049-12-31 23:59:59'),  // 最大时间

      currentMinAt: undefined, // 在选择时的最小时间
      currentMaxAt: undefined, // 在选择时的最大时间
      currentStep: 0,   // 当前步速，第一步开始时间
      models: {
        fullYear: 2017,
        month: 0,
        date: 1,
        hours: 0,
        minutes: 0,
        seconds: 0
      }
    }
  },
  methods: {
    emitAt () {
      return this.type === 'single'
        ? this.fromAt
        : { fromAt: this.fromAt, toAt: this.toAt }
    },

    updateModels (at) {
      this.models = {
        fullYear: at.getFullYear(),
        month: at.getMonth(),
        date: at.getDate(),
        hours: at.getHours(),
        minutes: at.getMinutes(),
        seconds: at.getSeconds()
      }
    },

    updateAt (models) {
      const at = new Date()
      at.setFullYear(models.fullYear)
      at.setMonth(models.month)
      at.setDate(models.date)
      at.setHours(models.hours)
      at.setMinutes(models.minutes)
      at.setSeconds(models.seconds)
      return at
    }
  },
  watch: {
    models: {
      deep: true,
      handler (newValue) {
        if (this.currentStep === 0) {
          this.fromAt = this.updateAt(newValue)
        } else {
          this.toAt = this.updateAt(newValue)
        }
      }
    }
  },
  created () {
    if (isUndefined(this.fromAt)) {
      this.fromAt = new Date()
    }

    if (isUndefined(this.toAt)) {
      this.toAt = this.fromAt
    }

    this.currentMinAt = this.minAt

    this.currentMaxAt = this.maxAt

    this.updateModels(this.fromAt)
  }
}
