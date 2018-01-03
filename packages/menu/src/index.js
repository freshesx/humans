import menu from './menu.vue'
import menuContent from './menuContent.vue'
import menuPane from './menuPane.vue'
import menuTitle from './menuTitle.vue'
import './index.scss'

const suite = {
  [menu.name]: menu,
  [menuContent.name]: menuContent,
  [menuPane.name]: menuPane,
  [menuTitle.name]: menuTitle
}

export {
  suite as menu
}
