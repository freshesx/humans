import tabBar from './tabBar.vue'
import tabBarItem from './tabBarItem.vue'
import './index.scss'

const suite = {
  [tabBar.name]: tabBar,
  [tabBarItem.name]: tabBarItem
}

export {
  suite as tabBar
}
