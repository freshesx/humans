import $ from 'jquery'
import popupStorage from '../popup/storage'

export default class Scroller {
  constructor () {
    this.storages = {}
  }

  addStorage (name, value) {
    this.storages[name] = value
  }

  getStorage (name) {
    return this.storages[name]
  }

  /**
   * Save scroll from vue route from
   *
   * @param from
   */
  saveScroll (from, Vue) {
    if (from.path && from.meta.scroll) {
      const $scroll = this.getScrollerElement(Vue)
      this.addStorage(from.fullPath, $scroll.scrollTop())
    }
  }

  /**
   * set scroll from storage
   *
   * @param to
   */
  setScroll (to, Vue) {
    let value = this.getStorage(to.fullPath)
    setTimeout(() => {
      const $scroll = this.getScrollerElement(Vue)
      $scroll.scrollTop(value)
      // 强制移除
      this.removePopupElement(Vue)
    })
  }

  getScrollerElement (Vue) {
    return $(`.${Vue.human.cssPrefix}scroller.is-save`)
  }

  removePopupElement (Vue) {
    // 设定一个容器存储所有的 popup，离开当前页面时自动关闭
    popupStorage.items().forEach(item => {
      item.show = false
    })
  }
}
