import $ from 'jquery'

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
}

export default {
  install (Vue, options) {
    let browser = new Browser()
    let classes = ''

    if (browser.storage.isSafari) classes += ' is-safari'
    if (browser.storage.isChrome) classes += ' is-chrome'

    $('html').addClass(classes)
  }
}
