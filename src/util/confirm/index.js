import popup from '../popup'
import confirm from '../../components/popup/confirm'

export default function (options = {}) {
  return popup(confirm, options)
}
