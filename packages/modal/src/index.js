import modal from './modal.vue'
import modalAction from './modalAction.vue'
import './index.scss'

const suite = {
  [modal.name]: modal,
  [modalAction.name]: modalAction
}

export {
  suite as modal
}
