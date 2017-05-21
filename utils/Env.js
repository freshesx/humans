import defaultsDeep from 'lodash/defaultsDeep'

const state = {
  _$debug: true,
  _$info: false
}

export default class Env {
  static merge (...objects) {
    Object.assign(state, defaultsDeep(state, ...objects))
    state.$info && console.info('Merge:', state)
    return state
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
