import letter from './letter.vue'
import letterBody from './letterBody.vue'
import letterAction from './letterAction.vue'
import './index.scss'

const suite = {
  [letter.name]: letter,
  [letterBody.name]: letterBody,
  [letterAction.name]: letterAction
}

export {
  suite as letter
}
