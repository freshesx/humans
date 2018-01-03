import shade from './shade.vue'
import Shade from './Shade.js'
import shadeMixin from './shadeMixin'
import './index.scss'

const suite = {
  [shade.name]: shade
}

export {
  suite as shade,
  Shade,
  shadeMixin
}
