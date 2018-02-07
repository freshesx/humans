import ScrollStorage from './ScrollStorage.js'

/**
 * Extend ScrollStorage. Add sessionStorage support.
 */
export default class ScrollSessionStorage extends ScrollStorage {
  /**
   * Constructor
   */
  constructor (...args) {
    super(...args)

    /**
     * @protected
     * The session storage prefix name
     */
    this.storagePrefix = 'MN_SCROLLS'

    try {
      // Get session storage item.
      // And parse by JSON
      const item = window.sessionStorage.getItem(this.storagePrefix)
      const parsed = window.JSON.parse(item)

      // If the parsed is not a array, throw error to use default scrollers value.
      // You can set array type or interface to check array structure.
      if (!Array.isArray(parsed)) {
        throw new Error('The value isn\'t a scroll array.')
      }

      // Use storage value
      this.scrollers = parsed
    } catch (err) {
      // Clear the session storage item to aviod error.
      window.sessionStorage.removeItem(this.storagePrefix)
    }
  }

  addScroller (...args) {
    super.addScroller(...args)
    window.sessionStorage.setItem(this.storagePrefix, window.JSON.stringify(this.scrollers))
  }

  removeScroller (...args) {
    super.removeScroller(...args)
    window.sessionStorage.setItem(this.storagePrefix, window.JSON.stringify(this.scrollers))
  }
}
