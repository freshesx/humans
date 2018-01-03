import confirm from './confirm.vue'
import Confirm from './Confirm.js'
import './index.scss'

const suite = {
  [confirm.name]: confirm
}

export {
  suite as confirm,
  Confirm
}
