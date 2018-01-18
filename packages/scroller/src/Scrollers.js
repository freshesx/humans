import { proxy } from './utils/proxy'
import { addEvent, removeEvent } from './utils/utils'

const defaultOptions = {
  threshold: 0.3,
  scrollContainerHeight: 0,
  container: null,
  enablePullDown: false,
  enablePullUp: false,
  touchStartFn: () => { },
  touchMoveFn: () => { },
  touchEndFn: () => { },
  scrollFn: () => { }
}
let scrollers = {
  list: []
}
scrollers = proxy(scrollers, 'scroll', ['list'], 'sessionStorage')

export default class Scroller {
  constructor (options) {
    // merge user optons with default options
    this.options = Object.assign({}, defaultOptions, options)
    /**
     * scroll container
    */
    this.container = this.options.container
    if (!(options.container instanceof HTMLElement)) {
      throw new Error('[scroller]:Container should be a html element!')
    }

    /**
     * get the height of the screen in pixels
    */
    this.screenHeight = window.screen.height

    if (!this.options.scrollContainerHeight) {
      this.options.scrollContainerHeight = this.container.offsetHeight
    }
    /**
     * user touching the screen sence
    */
    this.isInTouchStatus = false

    /**
     * user pull up or pull down the screen
    */
    this.refreshFlag = false

    /**
     * user pull up or pull down to make pageY reach threshold
    */
    this.isThresholded = false

    /**
     * distroy the scroller instance
    */
    this.destroyed = false

    /**
     * finger movement direction (up/down/none)
    */
    this.movingDirection = 'none'
    /**
     * last finger movement direction
    */
    this.preMovingDirection = this.movingDirection
    this.startPageY = 0
    this.prePageY = 0
    this.attachEvent()
    this.watchRefreshFlag()
  }
  /**
 * Add scroller to scrollers,
 * if the scroller value is extis, then remove old value, and add new.
 * @param {String} path      - $route path, or fullPath
 * @param {String} name      - Scroller name
 * @param {Number} [top=0]   - scrollTop
 * @param {Number} [left=0]  - scrollLeft
 */
  addScroller (path, name, top = 0, left = 0) {
    let index = -1
    index = scrollers.list.findIndex(s => s.path === path && s.name === name)
    if (index < 0) {
      scrollers.list.push({ path, name, top, left })
    } else {
      scrollers.list[index] = { path, name, top, left }
    }
  }
  /**
 * Find scroller storage by path and name
 * @param  {String} path      - $route path, or fullPath
 * @param  {String} name      - Scroller name
 * @return {Object|null}
 */
  findScroller (path, name) {
    let index = -1
    index = scrollers.list.findIndex(s => s.path === path && s.name === name)
    return index < 0 ? null : scrollers.list[index]
  }
  /**
 * Remove scroller by path and name
 * @param  {String} path      - $route path, or fullPath
 * @param  {String} name      - Scroller name
 */
  removeScroller (path, name) {
    let index = scrollers.list.findIndex(s => s.path === path && s.name === name)
    index >= 0 && scrollers.list.splice(index, 1)
  }
  /**
 * Get scroller top and left,
 * if can't find the scroller, then return default top and left.
 * @param  {String} path      - $route path, or fullPath
 * @param  {String} name      - Scroller name
 * @param  {Number} [top=0]   - Default top value
 * @param  {Number} [left=0]  - Default left value
 * @return {Object}           - { top, left }
 */
  getScroller (path, name, top = 0, left = 0) {
    let index = scrollers.list.findIndex(s => s.path === path && s.name === name)
    if (index >= 0) {
      let { top, left } = scrollers.list[index]
      return { top, left }
    } else {
      return {
        top, left
      }
    }
  }
  /**
   * detect scroll to top
   *
   * @returns {boolean}
   * @memberof Scroller
   */
  isTop () {
    return this.container.scrollTop <= 1
  }
  /**
   * detect scroll to bottom
   *
   * @returns
   * @memberof Scroller
   */
  isBottom () {
    let containerHeight = this.container.scrollHeight - this.options.scrollContainerHeight
    let currentScrollHeight = this.container.scrollTop
    return !(containerHeight - currentScrollHeight)
  }
  watchRefreshFlag () {
    if (typeof Object.defineProperty !== 'function') {
      return
    }
    let refreshFlag = false
    Object.defineProperty(this, 'refreshFlag', {
      get () {
        return refreshFlag
      },
      set (newVal) {
        refreshFlag = newVal
        this.isInTouchStatus = false
      }
    })
  }
  /**
   * attach event listener to scroll container
   *
   * @memberof Scroller
   */
  attachEvent () {
    const target = this.options.container
    addEvent(target, 'touchstart', this)
    addEvent(target, 'touchmove', this)
    addEvent(target, 'touchend', this)
    addEvent(target, 'touchcancel', this)
    addEvent(target, 'scroll', this)
  }
  /**
   * destroy attached event listeners
   *
   * @memberof Scroller
   */
  destroy () {
    this.destroyed = true
    this.destroyEvent()
  }
  destroyEvent () {
    const target = this.options.container
    removeEvent(target, 'touchstart', this)
    removeEvent(target, 'touchmove', this)
    removeEvent(target, 'touchend', this)
    removeEvent(target, 'touchcancel', this)
    removeEvent(target, 'scroll', this)
  }
  /**
   * use handleEvent function to catch events
   * so that we can easily attach or remove the listener
   *
   * @param {any} event
   * @returns
   * @memberof Scroller
   */
  handleEvent (event) {
    if (!(event instanceof Event)) return
    switch (event.type) {
      case 'touchstart':
      case 'mousedown':
        return this.touchStart(event)
      case 'touchmove':
        return this.touchMove(event)
      case 'touchcancel':
      case 'touchend':
        return this.touchEnd(event)
      case 'scroll':
        return this.scroll(event)
      default:
        break
    }
  }
  /**
   *
   * @param {any} event
   * @memberof Scroller
   */
  scroll (event) {
    if (this.isThresholded) {
      event.preventDefault()
    }
    this.options.scrollFn(event)
  }
  /**
   *
   *
   * @param {any} event
   * @memberof Scroller
   */
  touchStart (event) {
    const { touches } = event
    this.handleMovingDirection(touches[0].pageY)
    this.startPageY = this.prePageY = touches[0].pageY
    this.isInTouchStatus = true
    this.options.touchStartFn(event)
  }

  /**
   *
   *
   * @param {any} event
   * @memberof Scroller
   */
  touchMove (event) {
    if (!this.isInTouchStatus || this.refreshFlag) return
    const { touches } = event
    const pageY = touches[0].pageY
    /**
     * get the finger movment distance/screen sense height
     */
    this.percentage = (this.startPageY - pageY) / this.screenHeight
    this.handleMovingDirection(pageY)
    if (this.movingDirection === 'none') {
      return
    }
    this.preMovingDirection = this.movingDirection
    this.handleCriticalThreshold(event)
  }
  /**
   *
   *
   * @param {any} event
   * @memberof Scroller
   */
  touchEnd (event) {
    this.refreshFlag = false
    this.isThresholded = false
    this.isInTouchStatus = false
    this.movingDirection = 'none'
    this.options.touchEndFn(event, this.handleThreshold(), this.preMovingDirection)
  }

  /**
   *
   *
   * @param {any} event
   * @memberof Scroller
   */
  handleCriticalThreshold (event) {
    /**
     * pull up or pull down threshold calc
     */
    const criticalFlag = this.movingDirection === 'up' ? this.isBottom() && this.options.enablePullUp : this.isTop() && this.options.enablePullDown
    if (criticalFlag) {
      this.isThresholded = Math.abs(this.percentage) >= this.options.threshold
      if (this.isThresholded) {
        this.refreshFlag = true
      }
      this.options.touchMoveFn(event, this.handleThreshold(), this.movingDirection)
    }
  }
  /**
   * detect finger movement direction
   *
   * @param {number} pageY
   * @memberof Scroller
   */
  handleMovingDirection (pageY) {
    const distanceY = pageY - this.prePageY
    if (distanceY < 0) {
      this.movingDirection = 'up'
    } else if (distanceY > 0) {
      this.movingDirection = 'down'
    }
  }
  /**
   * if scroll to head or foot detect movment percentage / default threshold
   *
   * @returns
   * @memberof Scroller
   */
  handleThreshold () {
    return Math.min(Math.abs(this.percentage) / this.options.threshold, 1)
  }

  resetRefreshingStatusFn (status) {
    this.refreshFlag = status
  }
}
