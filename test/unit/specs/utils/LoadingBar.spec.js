import LoadingBar from 'vue-human/utils/LoadingBar'

describe('utils/LoadingBar', () => {
  it('finish # complete 70%', done => {
    new LoadingBar().finish(70).then(self => {
      const vm = self.vueComponent
      expect(vm.isShow).to.equal(true)
      expect(vm.percent).to.equal(70)
      expect(vm.millisecond).to.equal(1000)
      done()
    })
  })

  it('finish # complete 100%', done => {
    new LoadingBar().finish(100).then(self => {
      const vm = self.vueComponent
      expect(vm.isShow).to.equal(false)
      expect(vm.percent).to.equal(0)
      expect(vm.millisecond).to.equal(0)
      done()
    })
  })

  it('timeout', done => {
    new LoadingBar().timeout().then(response => {
      expect(response).to.equal(undefined)
      done()
    })
  })
})
