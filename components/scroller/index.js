import $ from 'jquery'

/**
 * Save scroll from vue route from
 *
 * @param from
 */
export function saveScroll (from) {
  if (from.path && from.meta.scroll) {
    const $scroll = $('.scrollbar-wrapper.is-save')
    let storage = $scroll.data('scroll') || {}
    storage[from.path] = $scroll.scrollTop()
    $scroll.data('scroll', storage)
  }
}

/**
 * set scroll from storage
 *
 * @param to
 */
export function setScroll (to) {
  setTimeout(() => {
    const $scroll = $('.scrollbar-wrapper.is-save')
    const storage = $scroll.data('scroll')
    const top = storage ? (storage[to.path] || 0) : 0

    $scroll.scrollTop(top)
  }, 0)
}

export default {
  install (Vue) {
    Vue.human.saveScroll = saveScroll
    Vue.human.setScroll = setScroll
  }
}
