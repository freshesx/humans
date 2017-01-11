import popup from '../popup'
import loadingMask from '../../components/loading-mask'

export default function (options = {}) {
  return popup(loadingMask, options)
}
