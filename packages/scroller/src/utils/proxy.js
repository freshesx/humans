import WindowStorage from './WindowStorage'
import { copy } from './utils'

let windowStorage

/**
 *
 *
 * @param {string} key
 * @param {object} object
 * @param {array} keys
 */
function setDataIntoStorage (key, object, keys) {
  windowStorage.setItem(key, copy(object, keys))
}

/**
 *
 *
 * @param {string} windowStorageKey
 * @param {object} storageValue
 * @param {string} primeKey
 * @returns
 */
function createHandler (windowStorageKey, storageValue, primeKey) {
  return {
    set: function (target, key, value, receiver) {
      if (storageValue && storageValue[primeKey]) {
        storageValue[primeKey][key] = value
        windowStorage.setItem(windowStorageKey, storageValue)
      }
      return Reflect.set(target, key, value, receiver)
    }
  }
}

/**
 *
 *
 * @export
 * @param {object} initState
 * @param {string} windowStorageKey
 * @param {array} [keys=[]]
 * @param {string} storageName
 */
export function proxy (initState, windowStorageKey, keys = [], storageName) {
  windowStorage = new WindowStorage(storageName)
  const storageValue = windowStorage.getItem(windowStorageKey)
  let copyState = Object.assign({}, initState, storageValue)
  // `key` in a block-level scoping
  keys.forEach((key) => {
    copyState[key] = new Proxy(copyState[key], createHandler(windowStorageKey, storageValue, key))
  })
  setDataIntoStorage(windowStorageKey, copyState, keys)
  return new Proxy(copyState, {
    set: function (target, key, value, receiver) {
      if (keys.indexOf(key)) {
        setDataIntoStorage(windowStorageKey, target, keys)
      }
      return Reflect.set(target, key, value, receiver)
    }
  })
}
