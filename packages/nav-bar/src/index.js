import navBar from './navBar.vue'
import navBarBack from './navBarBack.vue'
import navBarTitle from './navBarTitle.vue'
import './index.scss'

const suite = {
  [navBar.name]: navBar,
  [navBarBack.name]: navBarBack,
  [navBarTitle.name]: navBarTitle
}

export {
  suite as navBar
}
