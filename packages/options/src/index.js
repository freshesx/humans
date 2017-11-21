const storeOptions = {
  /**
   * Custom loading icon
   * @type {VueComponent}
   */
  loading: undefined
}

function get (name) {
  return storeOptions[name]
}

function set (name, value) {
  const old = get(name)
  storeOptions[name] = value
  console.log(`The option '${name}' has changed.`, value, old)

  return get(name)
}

export default { get, set }
