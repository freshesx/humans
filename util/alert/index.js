import popup from '../popup'
import alert from '../../components/popup/alert'

export default function (options = {}) {
  return popup(alert, options)
}
