let storage = []

export default {
  addItem (item) {
    storage.push(item)
  },
  removeItem (item) {
    storage.splice(storage.indexOf(item), 1)
  },
  items () {
    return storage
  }
}
