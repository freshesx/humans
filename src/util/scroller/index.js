import Vue from 'vue'
import popupStorage from '../popup/storage'

/**
 * @var {Object} Scroller setting storages
 */
let storages = {}

/**
 * addStorage
 *
 * @param  {String} name  route.from.fullPath
 * @param  {Number} value Scroll top
 * @return {this}
 */
function addStorage (name, value) {
  storages[name] = value
  return this
}

/**
 * getStorage
 *
 * @param  {String} name route.to.fullpath
 * @return {Number}      Scroll top
 */
function getStorage (name) {
  return storages[name]
}

/**
 * getFirstScrollerTop
 *
 * @return {Number}  Scroll top
 */
function getFirstScrollerTop () {
  let scroller = document.getElementsByClassName(
    `${Vue.human.cssPrefix}scroller is-save`)

  return scroller.length > 0
    ? scroller[0].scrollTop
    : 0
}

/**
 * setFirstScrollerTop
 *
 * @param  {type} value Scroll top
 * @return {this}
 */
function setFirstScrollerTop (value) {
  let scroller = document.getElementsByClassName(
    `${Vue.human.cssPrefix}scroller is-save`)

  if (scroller.length > 0) {
    scroller[0].scrollTop = value
  }

  return this
}

/**
 * removePopupElement
 *
 * @return {this}
 */
function removePopupElement () {
  // 设定一个容器存储所有的 popup，离开当前页面时自动关闭
  popupStorage.items().forEach(item => {
    item.show = false
  })

  return this
}

/**
 * saveScroll
 *
 * @param  {type} from route.from
 * @return {this}
 */
export function saveScroll (from) {
  if (from.path && from.meta.scroll) {
    addStorage(from.fullPath, getFirstScrollerTop())
  }

  return this
}

/**
 * setScroll
 *
 * @param  {type} to route.to
 * @return {this}
 */
export function setScroll (to) {
  let value = getStorage(to.fullPath)
  setTimeout(() => {
    setFirstScrollerTop(value)
    // 强制移除
    removePopupElement()
  })

  return this
}
