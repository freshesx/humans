import $ from 'jquery'

class Scroller {
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
    // @todo 建议设定一个容器存储所有的 popup 再触发清理
    $(`.${Vue.human.cssPrefix}popup`).remove()
    $(`.${Vue.human.cssPrefix}popup-mask`).remove()
  }
}

const scroller = new Scroller()

export default {
  install (Vue) {
    Vue.human.saveScroll = from => {
      scroller.saveScroll(from, Vue)
    }

    Vue.human.setScroll = to => {
      scroller.setScroll(to, Vue)
    }
  }
}
