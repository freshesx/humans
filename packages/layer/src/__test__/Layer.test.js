import Layer from '../Layer.js'

/** @test {Layer} */
describe('Layer', () => {
  /** @test {Layer#createComponent} */
  test('#createComponent: Should throw error when this.element is not defined.', () => {
    const layer = new Layer()
    expect(() => {
      layer.createComponent()
    }).toThrowError('The this.element should be a vue element.')
  })
})
