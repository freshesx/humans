import lodash from 'lodash'

class Browser {
  constructor () {
    this.detect()
  }

  detect () {
    const isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0
    const isChrome = !!window.chrome && !!window.chrome.webstore

    this.storage = {
      isSafari,
      isChrome
    }
  }

  isSafari () {
    return this.storage.isSafari
  }

  isChrome () {
    return this.storage.isChrome
  }
}

export default {
  install (Vue, options) {
    let browser = new Browser()
    let html = document.documentElement
    let classes = html.className

    if (browser.storage.isSafari) classes += ' is-safari'
    if (browser.storage.isChrome) classes += ' is-chrome'

    document.documentElement.className = lodash.trim(classes)
  }
}
