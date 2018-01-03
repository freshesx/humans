import loadingBar from './loadingBar.vue'
import LoadingBar from './LoadingBar.js'
import './index.scss'

const suite = {
  [loadingBar.name]: loadingBar
}

export {
  suite as loadingBar,
  LoadingBar
}
