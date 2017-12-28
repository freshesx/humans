import { Layer } from '@humans/layer'
import alertElement from './alert.vue'

export default class AlertLayer extends Layer {
  constructor () {
    super()
    this.element = alertElement
  }
}
