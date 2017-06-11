import Vue from 'vue'
import shadeElement from '../../../../../suites/shade/shade'

describe('suites/shade', () => {
  describe('shade.vue', () => {
    it('props.visible', done => {
      const propsData = { zIndex: 5000 }
      const vm = new (Vue.extend(shadeElement))({ propsData }).$mount()

      // 1. 默认为 false
      expect(vm.visible).to.be.equal(false)
      expect(vm.zIndex).to.be.equal(5000)

      // 2. 手动设置为 true
      vm.$props.visible = true
      expect(vm.visible).to.be.equal(true)

      // 3. 监听 $emit('update:visible')
      vm.$on('update:visible', visible => {
        expect(visible).to.be.equal(false)
        done()
      })

      vm.hide()
    })

    it('events.onHide', done => {
      const vm = new (Vue.extend(shadeElement))().$mount()
      vm.$props.visible = true

      vm.$on('update:visible', visible => {
        expect(visible).to.be.equal(false)
        done()
      })

      vm.onHide()
    })
  })
})
