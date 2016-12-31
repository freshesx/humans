import { trim } from 'lodash'
import browser from './index.js'

export default {
  install (Vue, options) {
    let html = document.documentElement
    let classes = html.className

    if (browser.isSafari()) classes += 'is-safari'
    if (browser.isChrome()) classes += ' is-chrome'

    document.documentElement.className = trim(classes)
  }
}
