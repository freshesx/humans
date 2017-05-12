import AxiosHelper from 'vue-human/util/AxiosHelper'

describe('util/AxiosHelper', () => {
  it('.error()', () => {
    const errorDate = {
      response: {
        status: 401
      }
    }

    const axiosHelper = new AxiosHelper().error(errorDate)

    expect(axiosHelper).to.be.equal('未定义 error 处理方式')
  })

  it('#error', () => {
    const errorDate = {
      response: {
        status: 401
      }
    }

    AxiosHelper.prototype.error401 = () => {
      return 'error401'
    }

    const message = new AxiosHelper().error(errorDate)
    expect(message).to.be.equal('error401')
  })

  it('.error() # exceptionError', () => {
    const errorDate = {}

    const axiosHelper = new AxiosHelper().error(errorDate)

    expect(axiosHelper).to.be.an.instanceof(AxiosHelper)
  })

  it('.$error401()', () => {
    const axiosHelper = new AxiosHelper().$error403()
    expect(axiosHelper).to.be.an.instanceof(AxiosHelper)
  })

  it('.$error403()', () => {
    const axiosHelper = new AxiosHelper().$error403()
    expect(axiosHelper).to.be.an.instanceof(AxiosHelper)
  })

  it('.$error404()', () => {
    const axiosHelper = new AxiosHelper().$error404()
    expect(axiosHelper).to.be.an.instanceof(AxiosHelper)
  })

  it('.$error500()', () => {
    const axiosHelper = new AxiosHelper().$error500()
    expect(axiosHelper).to.be.an.instanceof(AxiosHelper)
  })

  it('.errorException()', () => {
    const axiosHelper = new AxiosHelper().errorException()
    expect(axiosHelper).to.be.an.instanceof(AxiosHelper)
  })
})
