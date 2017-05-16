export default {
  filters: {
    formatDate (at) {
      // 2017年12月17日 周一
      return `${at.getFullYear()}年${at.getMonth() + 1}月${at.getDate()}日 周${at.getDay() + 1}`
    },
    formatTime (at) {
      return `${at.getHours()}:${at.getMinutes()}:${at.getSeconds()}`
    }
  }
}
