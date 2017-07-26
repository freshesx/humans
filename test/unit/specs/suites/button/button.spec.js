import Vue from 'vue'
import buttonElement from '../../../../../suites/button/button'

describe('suites/button/button.vue', () => {
  it('methods.start and methods.finish', () => {
    // 实例化
    const vm = new (Vue.extend(buttonElement))({ name: 'test' }).$mount()

    expect(vm.loading).to.be.equal(false)

    vm.start()

    expect(vm.loading).to.be.equal(true)

    vm.finish()

    expect(vm.loading).to.be.equal(false)
  })
})
