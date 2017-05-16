export default {
  data () {
    return {
      fromAt: new Date(), // 初始开始时间
      minAt: new Date('1970-01-01 00:00:00'),  // 最小时间
      maxAt: new Date('2049-12-31 23:59:59'),  // 最大时间
      title: '选择时间日期',
      cancelText: '取消',
      confirmText: '确认',
      showFullYear: true,
      showHours: true,
      showMintues: true,
      showSeconds: true,

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
      this.$emit('update:fromAt', this.fromAt)
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
        this.fromAt = this.updateAt(newValue)
      }
    }
  },
  created () {
    if (!this.showMintues) {
      this.fromAt.setMinutes(0)
    }

    if (!this.showSeconds) {
      this.fromAt.setSeconds(0)
    }

    this.updateModels(this.fromAt)
  }
}
