import { Layer } from '@humans/layer'
import shadeElement from './shade.vue'

export default class Shade extends Layer {
  constructor () {
    super()
    this.element = shadeElement
  }
}
