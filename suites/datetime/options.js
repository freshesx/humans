import {
  isLunarMonth,
  isLeapYear,
  isFebruary,
  formatDoubleNumber } from './dateChecker'

export default {
  computed: {
    fullYearOptions () {
      const options = []

      for (let i = 1970; i <= 2050; i++) {
        options.push({ label: i + '年', value: i })
      }

      return options
    },
    monthOptions () {
      const options = []

      for (let i = 0; i <= 11; i++) {
        options.push({ label: (i + 1) + '月', value: i })
      }

      return options
    },
    dateOptions () {
      const options = []
      // 默认大月份
      let max = 31

      // 小月份
      if (isLunarMonth(this.models.month)) {
        max = 30
      }

      // 平年 2 月
      if (!isLeapYear(this.models.fullYear) && isFebruary(this.models.month)) {
        max = 28
      }

      // 闰年 2 月
      if (isLeapYear(this.models.fullYear) && isFebruary(this.models.month)) {
        max = 29
      }

      for (let i = 1; i <= max; i++) {
        options.push({ label: i + '日', value: i })
      }

      return options
    },
    hoursOptions () {
      const options = []

      for (let i = 0; i <= 23; i++) {
        options.push({ label: formatDoubleNumber(i), value: i })
      }

      return options
    },
    minutesOptions () {
      const options = []

      for (let i = 0; i <= 59; i++) {
        options.push({ label: formatDoubleNumber(i), value: i })
      }

      return options
    },
    secondsOptions () {
      const options = []

      for (let i = 0; i <= 59; i++) {
        options.push({ label: formatDoubleNumber(i), value: i })
      }

      return options
    }
  }
}
