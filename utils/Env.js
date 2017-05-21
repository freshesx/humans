import defaultsDeep from 'lodash/defaultsDeep'

const state = {
  _$debug: true,
  _$info: false
}

export default class Env {
  static merge (...setsOfParams) {
    let store = {}

    // defaultsDeep 第一位为新对象，第二位为被合并的原对象
    setsOfParams.forEach(params => store = defaultsDeep(params, store))

    // 合并原有 state
    Object.assign(state, store)

    // 修改通知
    state._$info && console.info('Merge:', state)

    return this
  }

  static all () {
    return state
  }

  static get (name) {
    return state[name]
  }

  static set (name, value) {
    if (state.hasOwnProperty(name)) {
      state._$info && console.info(`New valud of '${name}' is:`, value)
      state[name] = value
    } else {
      state._$debug && console.error(`You don't declare '${name}'.`)
    }
    return this
  }
}
