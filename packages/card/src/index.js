import card from './card.vue'
import cardItem from './cardItem.vue'
import cardBody from './cardBody.vue'
import cardPrefix from './cardPrefix.vue'
import cardSuffix from './cardSuffix.vue'
import cardMedia from './cardMedia.vue'
import cardBtns from './cardBtns.vue'
import './index.scss'

export default {
  [card.name]: card,
  [cardItem.name]: cardItem,
  [cardBody.name]: cardBody,
  [cardPrefix.name]: cardPrefix,
  [cardSuffix.name]: cardSuffix,
  [cardMedia.name]: cardMedia,
  [cardBtns.name]: cardBtns
}
