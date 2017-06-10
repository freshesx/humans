import LoadingBar from 'vue-human/utils/LoadingBar'

describe('utils/LoadingBar', () => {
  it('#finish 70', done => {
    const loadingBar = new LoadingBar()

    loadingBar.finish(70).then(self => {
      const vm = self.vueComponent
      expect(vm.isShow).to.equal(true)
      expect(vm.percent).to.equal(70)
      expect(vm.millisecond).to.equal(1000)
      done()
    })
  })

  it('#finish 100', done => {
    const loadingBar = new LoadingBar()

    loadingBar.finish(100).then(self => {
      const vm = self.vueComponent
      expect(vm.isShow).to.equal(false)
      expect(vm.percent).to.equal(0)
      expect(vm.millisecond).to.equal(0)
      done()
    })
  })

  it('#timeout', done => {
    const loadingBar = new LoadingBar()

    loadingBar.timeout().then(response => {
      expect(response).to.equal(undefined)
      done()
    })
  })
})
