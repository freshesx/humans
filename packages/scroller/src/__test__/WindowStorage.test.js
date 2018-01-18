import WindowStorage from "../utils/WindowStorage";

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


describe('WinodwStorage',() => {
  const storage = new WindowStorage('sessionStorage')
  test('Should store value when user called setItem',() => {
    storage.setItem('USER','TEST')
    expect(storage.getItem('USER')).not.toBe('test')
    expect(storage.getItem('USER')).toBe('TEST')
  })
  test('Should remove store value when user called removeItem',() => {
    storage.setItem('USER','TEST')
    storage.removeItem('USER')
    expect(storage.getItem('USER')).toBe(null)
  })
  test('Should remove storewhen user called clear',() => {
    storage.setItem('USER','TEST')
    storage.clear()
    expect(storage.getItem('USER')).toBe(null)
  })
})
