import Suites from 'vue-human/utils/Suites'
import iconSuites from 'vue-human/suites/icon'
import iconElement from 'vue-human/suites/icon/icon'

describe('util/Suites', () => {
  it('constructor # When value is Suites object.', () => {
    const suites = new Suites([iconSuites])
    const components = suites.getComponents()

    expect(components).to.have.lengthOf(1)
    expect(components[0]).to.be.equal(iconElement)
  })

  it('constructor # When value is Element object.', () => {
    const suites = new Suites([iconElement])
    const components = suites.getComponents()

    expect(components).to.have.lengthOf(1)
    expect(components[0]).to.be.equal(iconElement)
  })

  it('map # Map components.', () => {
    const suites = new Suites([iconElement])
    const map = suites.map()
    const icon = map['mn-icon']

    expect(icon).to.be.equal(iconElement)
  })

  it('install # with "Element install" method.', () => {
    let installedComponent
    // 使用已经具备 install 方法的 element
    const suites = new Suites([iconElement])
    const Vue = {
      use (component) {
        installedComponent = component
      }
    }
    suites.install(Vue)
    expect(installedComponent).to.be.equal(iconElement)
  })

  it('install # without "Element install" method.', () => {
    let installedComponent
    // 临时建立一个 element，不带 install 方法
    const element = { name: 'test-component' }
    const suites = new Suites([element])
    const Vue = {
      use (component) {
        installedComponent = component
      }
    }

    try {
      suites.install(Vue)
    } catch (error) {
      expect(installedComponent).to.be.equal(undefined)
    }
  })
})
