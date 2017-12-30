import { Layer } from '@humans/layer'
import datetimeElement from './datetime.vue'

export default class Datetime extends Layer {
  constructor () {
    super()
    this.element = datetimeElement
  }
}
