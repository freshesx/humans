import radio from './radio.vue'
import radioIcon from './radioIcon.vue'
import radioItem from './radioItem.vue'
import radioTag from './radioTag.vue'
import './index.scss'

const suite = {
  [radio.name]: radio,
  [radioIcon.name]: radioIcon,
  [radioItem.name]: radioItem,
  [radioTag.name]: radioTag
}

export {
  suite as radio
}
