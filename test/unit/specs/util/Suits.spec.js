import Suits from 'vue-human/util/Suits'
import iconSuits from 'vue-human/components/icon'
import iconElement from 'vue-human/components/icon/icon'

describe('util/Suits', () => {
  it('#constructor using suits', () => {
    const suits = new Suits([iconSuits])
    const components = suits.getComponents()

    expect(components).to.have.lengthOf(1)
    expect(components[0]).to.be.equal(iconElement)
  })

  it('#constructor using element', () => {
    const suits = new Suits([iconElement])
    const components = suits.getComponents()

    expect(components).to.have.lengthOf(1)
    expect(components[0]).to.be.equal(iconElement)
  })

  it('#map and mapComponents', () => {
    const suits = new Suits([iconElement])
    const map = suits.map()
    const icon = map['mn-icon']

    expect(icon).to.be.equal(iconElement)
  })

  it('#install with component install', () => {
    let installedComponent
    const suits = new Suits([iconElement])
    const Vue = {
      use (component) {
        installedComponent = component
      }
    }
    suits.install(Vue)
    expect(installedComponent).to.be.equal(iconElement)
  })

  it('#install without component install', () => {
    let installedComponent
    const element = { name: 'test-component' }
    const suits = new Suits([element])
    const Vue = {
      use (component) {
        installedComponent = component
      }
    }
    suits.install(Vue)
    expect(installedComponent).to.be.equal(undefined)
  })
})
