// @todo 已被废弃
import { trim } from 'lodash'
import browser from './index.js'

export default {
  install (Vue, options) {
    let html = document.documentElement
    let classes = html.className

    if (browser.isSafari()) classes += ' is-safari'
    if (browser.isChrome()) classes += '  is-chrome'
    if (browser.isAndroid()) classes += ' is-android'
    if (browser.isIos()) classes += ' is-ios'
    if (browser.isWin()) classes += ' is-windows'
    if (browser.isMac()) classes += ' is-mac'

    document.documentElement.className = trim(classes)
  }
}
