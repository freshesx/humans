import AxiosHelper from 'vue-human/utils/AxiosHelper'

describe('util/AxiosHelper', () => {
  it('error # Handle error response by status code without 401 method.', () => {
    const errorResponse = { response: { status: 401 } }
    const output = new AxiosHelper().error(errorResponse)
    expect(output).to.be.equal(undefined)
  })

  it('error # Handle error response by status code with 401 method.', () => {
    const errorTip = 'show status code: 401.'
    const errorResponse = { response: { status: 401 } }
    AxiosHelper.prototype.error401 = () => errorTip
    const output = new AxiosHelper().error(errorResponse)
    expect(output).to.be.equal(errorTip)
  })

  it('error # Handle error response without empty response', done => {
    const errorResponse = {}
    const output = new AxiosHelper().error(errorResponse)

    // 返回的 openExceptionMessage 的 Promise
    expect(output).to.be.an.instanceof(Promise)
    output.then(messageLayer => {
      expect(messageLayer.vm.message).to.be.equal('网络异常错误，请刷新。')
      done()
    })
  })

  it('openMessage # Async loading Message popup and show it.', done => {
    new AxiosHelper().openMessage().then(messageLayer => {
      expect(messageLayer.vm.type).to.be.equal('error')
      done()
    })
  })

  it('openExceptionMessage # Open exception message by openMessage.', done => {
    new AxiosHelper().openExceptionMessage().then(messageLayer => {
      expect(messageLayer.vm.message).to.be.equal('网络异常错误，请刷新。')
      done()
    })
  })
})
