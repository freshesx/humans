/**
 * Save scrollers top and left by thier path and own name
 */
export class Scrollers {
  /**
   * Constructor
   */
  constructor () {
    /**
     * @protected
     */
    this.scrollers = []
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
    // If extis, remove old value
    this.removeScroller(path, name)
    // Add new value
    this.scrollers.push({ path, name, top, left })
  }

  /**
   * Find scroller storage by path and name
   * @param  {String} path      - $route path, or fullPath
   * @param  {String} name      - Scroller name
   * @return {Object|null}
   */
  findScroller (path, name) {
    const findeds = this.scrollers.filter(item => {
      return item.path === path && item.name === name
    })
    return findeds.length > 0 ? findeds[0] : null
  }

  /**
   * Remove scroller by path and name
   * @param  {String} path      - $route path, or fullPath
   * @param  {String} name      - Scroller name
   */
  removeScroller (path, name) {
    const finded = this.findScroller(path, name)

    // If finded, remove its old value
    if (finded) {
      this.scrollers.splice(this.scrollers.indexOf(finded), 1)
    }
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
    const finded = this.findScroller(path, name)

    if (finded) {
      if (finded.top) top = finded.top
      if (finded.left) left = finded.left
    }

    return { top, left }
  }
}

/**
 * Scroller protected function
 * @protected
 */
export default new Scrollers()
