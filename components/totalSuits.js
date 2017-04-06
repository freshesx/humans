import Suits from '../util/suits'
import basicSuits from './basic'
import articleSuits from '../components/article'
import tagSuits from '../components/tag'
import rateSuits from '../components/rate'
import menuSuits from '../components/menu'
import navBarSuits from '../components/nav-bar'
import tabBarSuits from '../components/tab-bar'
import searchBarSuits from '../components/search-bar'
import slideBarSuits from '../components/slide-bar'
import carouselSuits from '../components/carousel'
import cellSuits from '../components/cell'
import imageSuits from '../components/image'
import actionCardSuits from '../components/action-card'

console.warn('不建议直接使用 TotalSuits，basicSuits、coreSuits、formSuits、layoutSuits 都将在后续版本中完全弃用。建议提交更新')

export default new Suits([
  basicSuits,
  articleSuits,
  tagSuits,
  rateSuits,
  menuSuits,
  navBarSuits,
  tabBarSuits,
  searchBarSuits,
  slideBarSuits,
  carouselSuits,
  cellSuits,
  imageSuits,
  actionCardSuits
])
