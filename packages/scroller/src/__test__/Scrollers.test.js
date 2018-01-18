import Scroller from '../Scrollers'
import Jest from 'jest'
import { createEvent, dispatchTouch, dispatchTouchStart, dispatchTouchMove, dispatchTouchEnd } from "./utils/event";
import { testPrivateMode } from '../utils/utils';
class SessionStorageMock {
  constructor () {
    this.store = {}
  }

  clear () {
    this.store = {}
  }

  getItem (key) {
    return this.store[key] || null
  }

  setItem (key, value) {
    this.store[key] = value.toString()
  }

  removeItem (key) {
    delete this.store[key]
  }
}
global.sessionStorage = new SessionStorageMock

describe('Scrollers', () => {
  let scroll
  let scroller
  let scrollOptions = {
    threshold: 0.3,
    scrollContainerHeight: 0,
    container: null,
    enablePullDown: true,
    enablePullUp: true,
  }
  beforeEach(() => {
    const wrapper = document.createElement('div')
    const list = document.createElement('ul')
    scroll = document.createElement('div')
    scroll.appendChild(list)
    wrapper.appendChild(scroll)
    wrapper.style.height = '500px'
    let listHTML = ''
    for (let i = 0; i < 50; i++) {
      listHTML += `<li>${i}</li>`
    }
    list.innerHTML = listHTML
    scrollOptions.container = wrapper
    scrollOptions.scrollContainerHeight = 500
    window.screen.height = 763
  })
  test('Shoule return down and 1 when scroller was pulled down to threshold.', () => {
    let movingDirection = ''
    let threshold = 0
    const touchStartFn = jest.fn()
    const touchMoveFn = jest.fn()
    const config = Object.assign({}, scrollOptions, {
      touchStartFn: touchStartFn,
      touchMoveFn: touchMoveFn,
      touchEndFn: function (event, percent, md) {
        if (percent === 1) {
          threshold = percent
          movingDirection = md
          expect(movingDirection).toBe('down')
          expect(threshold).toBe(1)
        }
      }
    }
    )
    scroller = new Scroller(config)
    const wrap = config.container
    dispatchTouchStart(wrap, {
      pageX: 50,
      pageY: 50
    })
    dispatchTouchMove(wrap, {
      pageX: 50,
      pageY: 400
    })
    dispatchTouchEnd(wrap, {
      pageX: 50,
      pageY: 400
    })
    expect(touchStartFn).toBeCalled()
    expect(touchMoveFn).toBeCalled()
  })
  test('Shoule return up and 1 when scroller was pulled up to threshold.', () => {
    let movingDirection = ''
    let threshold = 0
    const touchStartFn = jest.fn()
    const touchMoveFn = jest.fn()
    const config = Object.assign({}, scrollOptions, {
      touchStartFn: touchStartFn,
      touchMoveFn: touchMoveFn,
      touchEndFn: function (event, percent, md) {
        if (percent === 1) {
          threshold = percent
          movingDirection = md
          expect(movingDirection).toBe('up')
          expect(threshold).toBe(1)
        }
      }
    }
    )
    scroller = new Scroller(config)
    const wrap = config.container
    dispatchTouchStart(wrap, {
      pageX: 50,
      pageY: 500
    })
    dispatchTouchMove(wrap, {
      pageX: 50,
      pageY: 20
    })
    dispatchTouchEnd(wrap, {
      pageX: 50,
      pageY: 20
    })
    expect(touchStartFn).toBeCalled()
  })
  test('Should store value when user call addScroller.', () => {
    const touchStartFn = jest.fn()
    const touchMoveFn = jest.fn()
    const touchEndFn = jest.fn()
    const config = Object.assign({}, scrollOptions, {
      touchStartFn: touchStartFn,
      touchMoveFn: touchMoveFn,
      touchEndFn: touchEndFn
    }
    )
    scroller = new Scroller(config)
    scroller.addScroller('/test', 'scrollerAdd', 0, 0)
    expect(scroller.getScroller('/test', 'scrollerAdd')).toEqual({
      top: 0, left: 0
    })
  })
  test('Should remove value when user call removeScroller.', () => {
    const touchStartFn = jest.fn()
    const touchMoveFn = jest.fn()
    const touchEndFn = jest.fn()
    const config = Object.assign({}, scrollOptions, {
      touchStartFn: touchStartFn,
      touchMoveFn: touchMoveFn,
      touchEndFn: touchEndFn
    }
    )
    scroller = new Scroller(config)
    scroller.addScroller('/test', 'scrollerAdd', 1, 1)
    expect(scroller.getScroller('/test', 'scrollerAdd')).toEqual({
      top: 1, left: 1
    })
    scroller.removeScroller('/test', 'scrollerAdd')
    expect(scroller.getScroller('/test', 'scrollerAdd')).toEqual({
      top: 0, left: 0
    })
  })
  test('Should store scrollTop when touch move a distance on the screen.', () => {
    let movingDirection = ''
    let threshold = 0
    const touchStartFn = jest.fn()
    const touchMoveFn = jest.fn()
    const touchEndFn = () => {
      scroller.addScroller('/', 'scroller', 20, 50)
    }
    const config = Object.assign({}, scrollOptions, {
      touchStartFn: touchStartFn,
      touchMoveFn: touchMoveFn,
      touchEndFn: touchEndFn
    }
    )
    scroller = new Scroller(config)
    const wrap = config.container
    dispatchTouchStart(wrap, {
      pageX: 50,
      pageY: 500
    })
    dispatchTouchMove(wrap, {
      pageX: 50,
      pageY: 20
    })
    dispatchTouchEnd(wrap, {
      pageX: 50,
      pageY: 20
    })
    expect(scroller.getScroller('/', 'scroller')).toEqual({
      top: 20, left: 50
    })
    expect(scroller.findScroller('/', 'scroller')).toEqual({
      path: '/', name: 'scroller', top: 20, left: 50
    })
  })
})
