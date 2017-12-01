import { mount } from 'vue-test-utils'
import container from './container'

describe('container.vue', () => {
  test('name', () => {
    const wrapper = mount(container)
    expect(wrapper.name()).toBe('mn-container')
  })

  test('Default prop fluid', () => {
    const wrapper = mount(container)
    expect(wrapper.hasClass('is-fluid')).toBe(false)
  })

  test('Set prop fluid is true', () => {
    const wrapper = mount(container, {
      propsData: {
        fluid: true
      }
    })
    expect(wrapper.hasClass('is-fluid')).toBe(true)
  })

  test('Set prop fluid is true', () => {
    const wrapper = mount(container, {
      slots: {
        default: '<div/>'
      }
    })
    console.log(wrapper.html())
    expect(wrapper.html()).toBe('<div class="mn-container"><div></div></div>')
  })
})
