import $ from 'jquery'

class Scroller {
  constructor () {
    this.storages = {}
    this.className = '.scroller.is-save'
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
  saveScroll (from) {
    if (from.path && from.meta.scroll) {
      const $scroll = $(this.className)
      this.addStorage(from.fullPath, $scroll.scrollTop())
    }
  }

  /**
   * set scroll from storage
   *
   * @param to
   */
  setScroll (to) {
    let value = this.getStorage(to.fullPath)
    setTimeout(() => {
      const $scroll = $(this.className)
      $scroll.scrollTop(value)

      // 强制移除
      // @todo 建议设定一个容器存储所有的 popup 再触发清理
      $('.human-popup').remove()
      $('.human-popup-mask').remove()
    })
  }
}

const scroller = new Scroller()

export default {
  install (Vue) {
    Vue.human.saveScroll = from => {
      scroller.saveScroll(from)
    }

    Vue.human.setScroll = to => {
      scroller.setScroll(to)
    }
  }
}
