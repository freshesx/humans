import AxiosHelper from 'vue-human/util/AxiosHelper'

describe('util/AxiosHelper', () => {
  it('.error()', () => {
    const errorDate = {
      errorDate: {
        response: {
          status: 401
        }
      }
    }

    const axiosHelper = new AxiosHelper().error(errorDate)

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
