import Vue from 'vue'
import Element from 'vue-human/utils/Element'

describe('util/Element', () => {
  it('.constructor()', () => {
    const vueElement = {
      name: 'mn-test'
    }

    const element = new Element(vueElement)
    const injected = element.insert()

    expect(element).to.be.an.instanceof(Element)
    expect(element).to.have.property('install')
    expect(Object.keys(injected)[0]).to.be.equal('mn-test')
  })

  it('.beforeInstalled() & .afterInstalled()', () => {
    const _Vue = Vue

    const vueElement = {
      name: 'mn-test',
      beforeInstalled (Vue, options) {
        expect(Vue).to.equal(_Vue)
        expect(options).to.deep.equal({ loading: 'loading' })
      },
      afterInstalled (Vue, options) {
        expect(Vue).to.equal(_Vue)
        expect(options).to.deep.equal({ loading: 'loading' })
      }
    }

    const element = new Element(vueElement)

    Vue.use(element, { loading: 'loading' })

    expect(element).to.be.an.instanceof(Element)
    expect(element).to.have.property('beforeInstalled')
    expect(element).to.have.property('afterInstalled')
  })
})
