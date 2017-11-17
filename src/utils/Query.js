import isUndefined from 'lodash/isUndefined'
import isString from 'lodash/isString'
import toNumber from 'lodash/toNumber'
import toLower from 'lodash/toLower'

/** Class 转化地址栏中的 query 参数 */
export default class Query {
  /**
   * 将对象转化，适应在http中，只有字符串，没有 JS 类型的问题，
   * 如将字符串 '1' 转化为数字 1
   * @static
   * @param {Object} imports - 转化前的对象
   * @return {Object} 转化后的对象
   */
  static parse (imports) {
    let outputs = {}

    Object.keys(imports).forEach(name => {
      outputs[name] = this.parseQuery(imports[name])
    })

    return outputs
  }

  /**
   * 转化某一个 query
   * @static
   * @protected
   * @param {*} query - 对象的值
   * @return {*}
   */
  static parseQuery (query) {
    if (isString(query)) {
      return this.parseStringQuery(query)
    }

    return query
  }

  /**
   * 转化某一个字符串的值
   * @static
   * @protected
   * @param {String} query
   * @return {*}
   */
  static parseStringQuery (query) {
    if (['', 'undefined'].includes(toLower(query))) {
      return this.parseUndefined(query)
    }

    if (toLower(query) === 'null') {
      return this.parseNull(query)
    }

    if (!Number.isNaN(this.parseNumber(query))) {
      return this.parseNumber(query)
    }

    // @todo: 转化数组、对象

    return query
  }

  /**
   * 将字符串转化为数字
   * @param {String} query
   * @returns {Number}
   */
  static parseNumber (query) {
    return toNumber(query)
  }

  /**
   * 转化 'undefined'
   * @param {String} query
   * @returns {undefined}
   */
  static parseUndefined (query) {
    return undefined
  }

  /**
   * 转化 'null'
   * @param {String} query
   * @returns {null}
   */
  static parseNull (query) {
    return null
  }

  /**
   * 解析 queries 并与 models 同步
   * 【该方法即将取消】
   * 请使用 Query.merge(x, Query.parse(this.$route.query))
   * @deprecated
   * @static
   *
   * @param  {Object} queris
   * @param  {Object} models
   *
   * @return {Object}
   */
  static sync (queris, models) {
    console.warn('该方法即将废弃，请改用 `Query.merge(x, Query.parse(this.$route.query))` ')
    const parsedQueries = this.parse(queris)

    Object.keys(models).forEach(name => {
      if (!isUndefined(parsedQueries[name])) {
        models[name] = parsedQueries[name]
      }
    })

    return models
  }

  /**
   * y 合并至 x
   * @method merge
   * @param  {Object} x 原对象
   * @param  {Object} y 新对象
   * @return {Object}   合并的对象
   */
  static merge (x, y) {
    return Object.assign({}, x, y)
  }
}
