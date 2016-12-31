export default {
  isSafari () {
    return Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0
  },
  isChrome () {
    return !!window.chrome && !!window.chrome.webstore
  }
}
