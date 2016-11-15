import $ from 'jquery'

class Scroller {
  constructor () {
    this.storages = []
  }

  addStorage (name, value) {
    let filterStorage = this.storages.filter(item => item.name === name)

    filterStorage.length > 0
      ? filterStorage[0] = value
      : this.storages.push({ name, value })
  }

  getStorage (name) {
    let filterStorage = this.storages.filter(item => item.name === name)

    return filterStorage.length > 0
      ? filterStorage[0].value
      : 0
  }

  /**
   * Save scroll from vue route from
   *
   * @param from
   */
  saveScroll (from) {
    if (from.path && from.meta.scroll) {
      const $scroll = $('.scroller.is-save')
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
      const $scroll = $('.scroller.is-save')
      $scroll.scrollTop(value)
    }, 0)
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
