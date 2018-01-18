/**
 * Create a pure Object
 * without functions extends from Object.prototype like hasOwnPrototype/valueOf/toString/isPrototypeOf/propertyIsEnumerable
 * @returns {object}
 */
function createObject () {
  return Object.create(null)
}

/**
 * If iPhone/Safari has private browsing enabled
 * return true
 * @returns {Boolean}
 */
function testPrivateMode () {
  try {
    window.localStorage.setItem('isPrivateMode', '1')
    window.localStorage.removeItem('isPrivateMode')
    return false
  } catch (error) {
    return true
  }
}

/**
 * A simple deep clone
 * only copy first level key into new object
 *
 * @param {any} source
 * @param {any} [keys=[]]
 * @returns
 */
function copy (source, keys = []) {
  if (!source) {
    return source
  }
  let pureObj = createObject()
  keys.forEach(key => {
    pureObj[key] = source[key]
  })
  return pureObj
}
/**
 * add listener to document element
 *
 * @param {object} el
 * @param {string} type
 * @param {any} fn
 * @param {boolean} capture
 */
function addEvent (el, type, fn, capture) {
  el.addEventListener(type, fn, { passive: false, capture: !!capture })
}

/**
 * remove listener from document element
 *
 * @param {object} el
 * @param {string} type
 * @param {any} fn
 * @param {boolean} capture
 */
function removeEvent (el, type, fn, capture) {
  el.removeEventListener(type, fn, { passive: false, capture: !!capture })
}

export {
  createObject,
  testPrivateMode,
  copy,
  addEvent,
  removeEvent
}
