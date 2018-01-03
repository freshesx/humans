import column from './column.vue'
import columns from './columns.vue'
import './index.scss'

const suite = {
  [column.name]: column,
  [columns.name]: columns
}

export {
  suite as column
}
