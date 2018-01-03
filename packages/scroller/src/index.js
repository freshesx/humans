import scroller from './scroller.vue'
import Scrollers from './Scrollers.js'
import './index.scss'

const suite = {
  [scroller.name]: scroller
}

export {
  suite as scroller,
  Scrollers
}
