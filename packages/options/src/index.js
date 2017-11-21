const storeOptions = {
  /**
   * Custom loading icon
   * @type {VueComponent}
   */
  loading: undefined
}

export function get (name) {
  return storeOptions[name]
}

export function set (name, value) {
  if (!storeOptions.hasOwnProperty(name)) {
    throw new Error(`The options haven't ${name} property.`)
  }

  const old = get(name)
  storeOptions[name] = value
  console.log(`The option '${name}' has changed.`, value, old)

  return get(name)
}

export default { get, set }
