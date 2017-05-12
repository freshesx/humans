import Suites from 'vue-human/utils/Suites'
import iconSuites from 'vue-human/suites/icon'
import iconElement from 'vue-human/suites/icon/icon'

describe('util/Suites', () => {
  it('#constructor using suites', () => {
    const suites = new Suites([iconSuites])
    const components = suites.getComponents()

    expect(components).to.have.lengthOf(1)
    expect(components[0]).to.be.equal(iconElement)
  })

  it('#constructor using element', () => {
    const suites = new Suites([iconElement])
    const components = suites.getComponents()

    expect(components).to.have.lengthOf(1)
    expect(components[0]).to.be.equal(iconElement)
  })

  it('#map and mapComponents', () => {
    const suites = new Suites([iconElement])
    const map = suites.map()
    const icon = map['mn-icon']

    expect(icon).to.be.equal(iconElement)
  })

  it('#install with component install', () => {
    let installedComponent
    const suites = new Suites([iconElement])
    const Vue = {
      use (component) {
        installedComponent = component
      }
    }
    suites.install(Vue)
    expect(installedComponent).to.be.equal(iconElement)
  })

  it('#install without component install', () => {
    let installedComponent
    const element = { name: 'test-component' }
    const suites = new Suites([element])
    const Vue = {
      use (component) {
        installedComponent = component
      }
    }
    suites.install(Vue)
    expect(installedComponent).to.be.equal(undefined)
  })
})
