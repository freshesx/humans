import Env from 'vue-human/utils/Env'

describe('utils/Env', () => {
  it('#all', () => {
    const state = Env.all()

    expect(state).to.be.deep.equal({
      _$debug: true,
      _$info: false
    })
  })

  it('#deepMerge', () => {
    const params1 = {
      _$debug: false,
      userToken: {
        name: 'MinoWu'
      }
    }

    const params2 = {
      userToken: {
        name: 'ChaselWu',
        email: 'chasel.wu@vitualreaty.com'
      }
    }

    const env = Env.deepMerge(params1, params2)

    const state = env.all()

    expect(state.userToken.name).to.be.equal('ChaselWu')
    expect(state._$debug).to.be.false
  })

  it('#merge', () => {
    const params = {
      userToken: {
        name: 'Jeffery'
      }
    }

    expect(Env.merge(params).get('userToken')).to.be.deep.equal({
      name: 'Jeffery'
    })
  })

  it('#get', () => {
    const userToken = Env.get('userToken')

    expect(userToken).to.be.deep.equal({
      name: 'Jeffery'
    })
  })

  it('#set', () => {
    const user = {
      name: 'Sun',
      email: 'sun@example.com'
    }

    Env.set('userToken', user)
    Env.set('someName', user)

    expect(Env.get('userToken')).to.be.deep.equal({
      name: 'Sun',
      email: 'sun@example.com'
    })

    expect(Env.get('someName')).to.be.undefined
  })
})
