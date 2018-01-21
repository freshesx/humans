import scroller from './scroller.vue'
import ScrollStorage from './ScrollStorage.js'
import './index.scss'

const suite = {
  [scroller.name]: scroller
}

export {
  suite as scroller,
  ScrollStorage
}
