/**
 * 存储 Query 请求时的参数，并按一定的格式字符串化
 * @class Query
 */
export default class Query {
  /**
   * 存储筛选条件
   * @var {Object}
   */
  conditions = {}

  /**
   * 存储排序条件
   * @var {Object}
   */
  orderBys = {}

  addCondition (name, value) {
    return this.add('conditions', name, value)
  }

  setConditions (conditions) {
    return this.set('conditions', conditions)
  }

  addOrderBy (name, value) {
    return this.add('orderBys', name, value)
  }

  setOrderBys (orderBys) {
    return this.set('orderBys', orderBys)
  }

  /**
   * 返回合并后的参数
   */
  params () {
    return { ...this.conditions, orderBys: this.orderBys }
  }

  /**
   * 添加单个结果至储存器
   *
   * @param {String} storageName
   * @param {String} name
   * @param {null|mixin} value null 为删除
   *
   * @return this
   */
  add (storageName, name, value) {
    if (value === null) return this.remove(storageName, name)
    this[storageName][name] = value
    return this
  }

  /**
   * 移除单个结果至储存器
   *
   * @param {String} storageName
   * @param {String} name
   *
   * @return this
   */
  remove (storageName, name) {
    if (name in this[storageName]) delete this[storageName][name]
    return this
  }

  /**
   * 替换新的储存内容至储存器
   *
   * @param {String} storageName
   * @param {Object} storageValue
   *
   * @return this
   */
  set (storageName, storageValue) {
    if (typeof storageValue === 'object' && storageValue.constructor === Object) {
      this[storageName] = storageValue
      return this
    }
    console && console.warn('传递的存储内容不是一个对象。')
    return this
  }
}
