export default {
  isSafari () {
    return Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0
  },
  isChrome () {
    return !!window.chrome && !!window.chrome.webstore
  },
  isAndroid () {
    return navigator.userAgent.indexOf('Android') > -1 || navigator.userAgent.indexOf('Adr') > -1
  },
  isIos () {
    return !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
  },
  isWin () {
    return navigator.platform.indexOf('Win') > -1
  },
  isMac () {
    return navigator.platform.indexOf('Mac') > -1
  }
}
