import alert from './alert.vue'
import Alert from './Alert.js'
import './index.scss'

const suite = {
  [alert.name]: alert
}

export {
  suite as alert,
  Alert
}
