import lodash from 'lodash'

let storage = []

export default {
  addItem (item) {
    storage.push(item)
  },
  removeItem (item) {
    lodash.pull(storage, item)
  },
  items () {
    return storage
  }
}
