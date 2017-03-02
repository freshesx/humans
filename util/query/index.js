import { isObjectLike } from 'lodash'

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

  constructor (datasets) {
    // Exec beforeCreate
    this.beforeCreate.apply(this)

    for (var name in datasets) {
      if (!datasets.hasOwnProperty(name)) return
      // 储存器特殊储存
      if (['conditions'].includes(name)) {
        this.set(datasets[name])
      } else {
        this[name] = datasets[name]
      }
    }
  }

  beforeCreate () {
  }

  changed () {
  }

  /**
   * 返回合并后的参数
   */
  params () {
    // return this.conditions
    this.conditions
    let obj = {}

    for (var name in this.conditions) {
      if (this.conditions.hasOwnProperty(name)) {
        let condition = this.conditions[name]

        //  = this.conditions[name]
        //
        // // 如果
        // obj[name] = typeof condition === 'object'
        //   ? condition
        //   : condition
        //
        // typeof condition === 'object' && condition.constructor

        if (isObjectLike(condition)) {
          condition = convertObject(condition)
        }

        obj[name] = condition
      }
    }
    console.log(obj)
    return obj
  }

  convertObject (condition) {
    return JSON.stringify(condition)
  }

  /**
   * 添加单个结果至储存器
   *
   * @param {String} name
   * @param {null|mixin} value null 为删除
   * @param {Boolean} notifyChange
   *
   * @return this
   */
  add (name, value, notifyChange = true) {
    if (value === null) return this.remove(name)
    this.conditions[name] = value
    // 通知更新
    if (notifyChange) this.changed.apply(this, this.conditions)
    return this
  }

  /**
   * 移除单个结果至储存器
   *
   * @param {String} name
   * @param {Boolean} notifyChange
   *
   * @return this
   */
  remove (name, notifyChange = true) {
    if (name in this.conditions) delete this.conditions[name]
    // 通知更新
    if (notifyChange) this.changed.apply(this, this.conditions)
    return this
  }

  /**
   * 替换新的储存内容至储存器
   *
   * @param {Object} storageValue
   * @param {Boolean} notifyChange
   *
   * @return this
   */
  set (storageValue, notifyChange = true) {
    if (typeof storageValue !== 'object' || storageValue.constructor !== Object) {
      console && console.warn('传递的存储内容不是一个对象。')
      return this
    }

    for (var name in storageValue) {
      if (storageValue.hasOwnProperty(name)) {
        this.add(name, storageValue[name], false)
      }
    }

    if (notifyChange) this.changed.apply(this, this.conditions) // 通知更新

    return this
  }
}
