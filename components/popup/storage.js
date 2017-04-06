let storage = []

export function addPopup (vueComponent) {
  storage.push(vueComponent)
}

export function removePopup (vueComponent) {
  storage.splice(storage.indexOf(vueComponent), 1)
}

export function savedPopups () {
  return storage
}
