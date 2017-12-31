import menu from './menu.vue'
import menuContent from './menuContent.vue'
import menuPane from './menuPane.vue'
import menuTitle from './menuTitle.vue'
import './index.scss'

export default {
  [menu.name]: menu,
  [menuContent.name]: menuContent,
  [menuPane.name]: menuPane,
  [menuTitle.name]: menuTitle
}
