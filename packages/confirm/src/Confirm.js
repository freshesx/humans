import { Layer } from '@humans/layer'
import confirmElement from './confirm.vue'

export default class Confirm extends Layer {
  constructor () {
    super()
    this.element = confirmElement
  }
}
