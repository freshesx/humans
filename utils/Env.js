import defaultsDeep from 'lodash/defaultsDeep'
import defaults from 'lodash/defaults'

const state = {
  _$debug: true,
  _$info: false
}

export default class Env {
  static merge (...setsOfParams) {
    return this.baseMerge(setsOfParams)
  }

  static deepMerge (...setsOfParams) {
    return this.baseMerge(setsOfParams, true)
  }

  static baseMerge (setsOfParams, deep = false) {
    // 选择是否深度合并
    const merge = deep ? defaultsDeep : defaults

    // defaultsDeep 第一位为新对象，第二位为被合并的原对象
    // @see {@link https://lodash.com/docs/4.17.4#defaults}
    const store = merge(...setsOfParams.reverse(), {})

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
