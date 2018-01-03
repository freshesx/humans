import helper from './helper.vue'
import helperItem from './helperItem.vue'
import './index.scss'

const suite = {
  [helper.name]: helper,
  [helperItem.name]: helperItem
}

export {
  suite as helper
}
