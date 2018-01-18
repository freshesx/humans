import {
  createObject,
  testPrivateMode,
  copy,
  addEvent,
  removeEvent
} from "../utils/utils";

import { createEvent, dispatchTouch } from "./utils/event";

class LocalStorageMock {
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
    // this.store[key] = value.toString()
    throw new Error()
  }

  removeItem (key) {
    delete this.store[key]
  }
}
global.localStorage = new LocalStorageMock

describe('utils', () => {
  test('Should create a new object with the specified prototype object and properties.', () => {
    const pureObject = createObject()
    expect(pureObject.hasOwnProperty).toBeUndefined()
    expect(pureObject.valueOf).toBeUndefined()
    expect(pureObject.toString).toBeUndefined()
    expect(pureObject.isPrototypeOf).toBeUndefined()
    expect(pureObject.propertyIsEnumerable).toBeUndefined()
  })
  test('Should return false when user use IOS private browsing mode and set item into localstorage.', () => {
    expect(testPrivateMode()).toBe(true)
  })
  test('Should deep clone object with its first level.', () => {
    let mockObj = {
      name: "green",
      info: {
        country: "China",
        locale: {
          province: "JiangSu",
          city: "SuZhou"
        }
      }
    }
    expect(copy(mockObj, ['name', 'info'])).toEqual(mockObj)
  })
  test('Shoule bind listener on DOM',() => {
    const DIV = document.createElement('div')
    const handleEvent = jest.fn()
    addEvent(DIV,'testevent',handleEvent)
    dispatchTouch(DIV, 'testevent')
    expect(handleEvent).toBeCalled()
  })
  test('Shoule unbind listener on DOM',() => {
    const DIV = document.createElement('div')
    const handleEvent = jest.fn()
    addEvent(DIV,'testevent',handleEvent)
    removeEvent(DIV,'testevent',handleEvent)
    dispatchTouch(DIV, 'testevent')
    expect(handleEvent).not.toBeCalled()
  })
})
