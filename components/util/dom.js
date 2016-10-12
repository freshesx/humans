import $ from 'jquery'

export function readyAndResize (callback) {
  callback.apply()

  const resize = $(window).resize(() => {
    callback.apply()
  })

  return resize
}

export function windowWidth () {
  return $(window).width()
}
