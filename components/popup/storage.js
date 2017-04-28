let storage = []

export function addPopup (vueComponent) {
  storage.push(vueComponent)
}

export function removePopup (vueComponent) {
  storage.splice(storage.indexOf(vueComponent), 1)
}

export function closeAllPopups (callback) {
  storage.forEach(popupComponent => {
    popupComponent.close()
    if (callback) callback.apply(this)
  })
}
