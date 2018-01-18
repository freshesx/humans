export function createEvent (type, name) {
  const e = document.createEvent(type || 'Event')
  e.initEvent(name, true, true)
  return e
}

export function dispatchTouch (target, name = 'touchstart', touches) {
  const event = createEvent('', name)
  event.touches = event.targetTouches = event.changedTouches = Array.isArray(touches) ? touches : [touches]
  target.dispatchEvent(event)
}

export function dispatchTouchStart (target, touches) {
  dispatchTouch(target, 'touchstart', touches)
}

export function dispatchTouchMove (target, touches) {
  dispatchTouch(target, 'touchmove', touches)
}

export function dispatchTouchEnd (target, touches) {
  dispatchTouch(target, 'touchend', touches)
}
