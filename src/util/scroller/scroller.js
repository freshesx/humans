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
      this.addStorage(from.fullPath, this.getFirstScrollerTop(Vue))
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
      this.setFirstScrollerTop(value, Vue)
      // 强制移除
      this.removePopupElement(Vue)
    })
  }

  getFirstScrollerTop (Vue) {
    let scroller = document.getElementsByClassName(
      `${Vue.human.cssPrefix}scroller is-save`)

    return scroller.length > 0
      ? scroller[0].scrollTop
      : 0
  }

  setFirstScrollerTop (value, Vue) {
    let scroller = document.getElementsByClassName(
      `${Vue.human.cssPrefix}scroller is-save`)

    if (scroller.length > 0) {
      scroller[0].scrollTop = value
    }
  }

  removePopupElement (Vue) {
    // 设定一个容器存储所有的 popup，离开当前页面时自动关闭
    popupStorage.items().forEach(item => {
      item.show = false
    })
  }
}
