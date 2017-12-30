import { Layer } from '@humans/layer'
import loadingMaskElement from './loadingMask.vue'

export default class LoadingMask extends Layer {
  constructor () {
    super()
    this.element = loadingMaskElement
  }
}
