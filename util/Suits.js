/** Class 封装多个组件的 Suits 类 */
export default class Suits {
  /**
   * @var {Array}
   */
  components = []

  /**
   * 构造函数，判断传入的对象是 Suits 对象还是数组，并合并
   * @param {Array} components
   */
  constructor (components) {
    components.forEach(item => {
      let items = item instanceof Suits
        ? item.getComponents()
        : item

      this.components = this.components.concat(items)
    })
  }

  /**
   * 返回 Suits 内的所有组件
   * @return {Array}
   */
  getComponents () {
    return this.components
  }

  /**
   * vue.use() 的安装方法
   * @param {Vue} Vue
   */
  install (Vue) {
    this.components.forEach(component => {
      if (!component.install) {
        return console.warn(`${component.name} 没有 install 方法`, component)
      }
      Vue.use(component)
    })
  }
}
