import Scrollers from './Scrollers'

/** @test {Scrollers} */
describe('Scrollers', () => {
  const scrollers = new Scrollers()

  /** @test {Scrollers#addScroller} */
  test('Scrollers.prototype.addScroller with top 200', () => {
    scrollers.addScroller('/', 'default', 200)
    expect(scrollers.scrollers).toEqual([
      {
        path: '/',
        name: 'default',
        top: 200,
        left: 0
      }
    ])
  })

  /** @test {Scrollers#addScroller} */
  test('Scrollers.prototype.addScroller with left 300', () => {
    scrollers.addScroller('/', 'default', undefined, 300)
    expect(scrollers.scrollers).toEqual([
      {
        path: '/',
        name: 'default',
        top: 0,
        left: 300
      }
    ])
  })

  /** @test {Scrollers#findScroller} */
  test('Scrollers.prototype.findScroller', () => {
    scrollers.addScroller('/', 'default', 100, 300)
    const output = scrollers.findScroller('/', 'default')
    expect(output).toEqual({
      path: '/',
      name: 'default',
      top: 100,
      left: 300
    })
  })

  /** @test {Scrollers#removeScroller} */
  test('Scrollers.prototype.removeScroller', () => {
    scrollers.removeScroller('/', 'default')
    expect(scrollers.scrollers).toEqual([])
  })

  /** @test {Scrollers#getScroller} */
  test('Scrollers.prototype.getScroller without finded', () => {
    const output = scrollers.getScroller('/', 'sidebar')
    expect(output).toEqual({ top: 0, left: 0 })
  })

  /** @test {Scrollers#getScroller} */
  test('Scrollers.prototype.getScroller with only top 300', () => {
    scrollers.addScroller('/', 'default', 300)
    const output = scrollers.getScroller('/', 'default')
    expect(output).toEqual({ top: 300, left: 0 })
  })

  /** @test {Scrollers#getScroller} */
  test('Scrollers.prototype.getScroller with only left 500', () => {
    scrollers.addScroller('/', 'default', undefined, 500)
    const output = scrollers.getScroller('/', 'default')
    expect(output).toEqual({ top: 0, left: 500 })
  })
})
