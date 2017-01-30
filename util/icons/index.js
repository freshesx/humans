let storage = {}

export default {
  items () {
    return storage
  },

  getItem (name) {
    return storage[name]
  },

  addItems (icons) {
    storage = { ...storage, ...icons }
  },

  addItem (name, content) {
    storage[name] = content
    return this
  },

  removeItem (name) {
    delete storage[name]
    return this
  }
}
