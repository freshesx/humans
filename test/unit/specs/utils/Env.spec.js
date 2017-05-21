import Env from 'vue-human/utils/Env'

describe('utils/Env', () => {
  it('#all', () => {
    const state = Env.all()

    expect(state).to.be.deep.equal({
      _$debug: true,
      _$info: false
    })
  })

  it('#merge', () => {
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

    const env = Env.merge(params1, params2)

    const state = env.all()

    expect(state.userToken.name).to.be.equal('ChaselWu')
    expect(state._$debug).to.be.false
  })

  it('#get', () => {
    const userToken = Env.get('userToken')

    expect(userToken).to.be.deep.equal({
      name: 'ChaselWu',
      email: 'chasel.wu@vitualreaty.com'
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
