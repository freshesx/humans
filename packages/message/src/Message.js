import { Layer } from '@humans/layer'
import messageElement from './message.vue'

export default class Message extends Layer {
  constructor () {
    super()
    this.element = messageElement
  }
}
