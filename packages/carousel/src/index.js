import carousel from './carousel.vue'
import carouselItem from './carouselItem.vue'
import './index.scss'

const suite = {
  [carousel.name]: carousel,
  [carouselItem.name]: carouselItem
}

export {
  suite as carousel
}
