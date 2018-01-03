import datetime from './datetime.vue'
import datetimePicker from './datetimePicker.vue'
import Datetime from './Datetime.js'
import DatetimeRange from './DatetimeRange.js'
import './index.scss'

const suite = {
  [datetime.name]: datetime,
  [datetimePicker.name]: datetimePicker
}

export {
  suite as datetime,
  Datetime,
  DatetimeRange
}
