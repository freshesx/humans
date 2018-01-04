import { Layer } from '@humans/layer'
import confirmElement from './confirm.vue'

/**
 * Confirm layer class
 */
export default class Confirm extends Layer {
  /**
   * constructor
   */
  constructor () {
    super()
    this.element = confirmElement
  }
}
