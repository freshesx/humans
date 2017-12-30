import { Layer } from '@humans/layer'
import confirmElement from './confirm.vue'

console.log('confirmElement', confirmElement)

export default class Confirm extends Layer {
  constructor () {
    super()
    this.element = confirmElement
  }
}
