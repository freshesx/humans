import swipe from './swipe.vue'
import swipeItem from './swipeItem.vue'
import './index.scss'

const suite = {
  [swipe.name]: swipe,
  [swipeItem.name]: swipeItem
}

export {
  suite as swipe
}
