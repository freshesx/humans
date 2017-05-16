import Vue from 'vue'
import { formatDoubleNumber } from './dateChecker'

export default {
  filters: {
    formatDate (at) {
      const month = Vue.t(`mn.datetime.months.${at.getMonth()}`)
      const date = Vue.t(`mn.datetime.dates.${at.getDate()}`)
      const week = Vue.t(`mn.datetime.weeks.${at.getDay()}`)
      return `${at.getFullYear()} ${month}${date} ${week}`
    },

    formatTime (at) {
      const hours = formatDoubleNumber(at.getHours())
      const minutes = formatDoubleNumber(at.getMinutes())
      const seconds = formatDoubleNumber(at.getSeconds())
      return `${hours}:${minutes}:${seconds}`
    }
  }
}
