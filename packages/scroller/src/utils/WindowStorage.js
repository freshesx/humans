import { createObject, testPrivateMode } from './utils'
/**
 * Creates an instance of WindowStroage.
 * @param {string} storageName expect localStrong or sessionStorage
 * @memberof WindowStroage
 */
export default class WindowStroage {
  constructor (storageName) {
    if (!window) {
      throw new TypeError(`[WindowStroage]: ${storageName} is not defined in window。`)
    }
    /**
     * ios private browsing issue
     */
    this.isPrivateMode = false
    if (testPrivateMode(storageName)) {
      this.isPrivateMode = true
      this.storage = createObject()
    } else {
      this.storage = window[storageName]
    }
  }
  /**
   * get item from stroage
   *
   * @param {any} key
   * @returns
   * @memberof WindowStroage
   */
  getItem (key) {
    if (this.isPrivateMode) {
      if (!(key in this.storage)) {
        return null
      } else {
        return this.storage[key]
      }
    } else {
      try {
        return JSON.parse(this.storage.getItem(key))
      } catch (error) {
        throw error
      }
    }
  }
  /**
   * set item into stroage
   *
   * @param {any} key
   * @param {any} val
   * @memberof WindowStroage
   */
  setItem (key, val) {
    if (this.isPrivateMode) {
      this.storage[key] = val
    } else {
      try {
        this.storage.setItem(key, JSON.stringify(val))
      } catch (error) {
        throw error
      }
    }
  }
  /**
   * clear the stroage
   *
   * @memberof WindowStroage
   */
  clear () {
    if (this.isPrivateMode) {
      this.storage = createObject()
    } else {
      this.storage.clear()
    }
  }
  keys () {
    if (this.isPrivateMode) {
      return Object.keys(this.storage)
    }
    return this.storage.keys()
  }
  removeItem (key) {
    if (this.isPrivateMode) {
      delete this.storage[key]
    } else {
      this.storage.removeItem(key)
    }
  }
}
