import datetime from './datetime.vue'
import datetimePicker from './datetimePicker.vue'
import Datetime from './Datetime.js'
// import DatetimeRange from './DatetimeRange.js'
import './index.scss'

export default {
  [datetime.name]: datetime,
  [datetimePicker.name]: datetimePicker
}

export { Datetime }
// DatetimeRange
