import isFunction from 'lodash/isFunction'

/** axios 辅助类，用于判断 response error 和打开相应的 Message 浮层 */
export default class AxiosHelper {
  /**
   * handleErrorByStatus 的别名
   * @alias handleErrorByStatus
   * @public
   * @param  {Object}    error - 错误响应的对象
   * @return {*}
   */
  error (errorResponse) {
    return this.handleErrorByStatus(errorResponse)
  }

  /**
   * 通过 response status code 执行定义后的相应方法
   * @method handleErrorByStatus
   * @public
   * @param  {Object}     errorResponse - 错误响应的对象
   * @return {*}
   */
  handleErrorByStatus (errorResponse) {
    // 如果不存在 reponse，则属于 axios 的异常错误
    if (!errorResponse.response) {
      return this.openExceptionMessage(errorResponse)
    }

    // 构造函数名
    const functionName = `error${errorResponse.response.status}`

    // 查找是否定义了该函数
    if (isFunction(this[functionName])) {
      return this[functionName](errorResponse)
    }
  }

  /**
   * 异步载入 utils/Message，完成后创建 message
   * @method openMessage
   * @public
   * @param  {Object}    propsData - MnMessage props 属性的值
   * @return {Promise}
   */
  async openMessage (propsData = {}) {
    const { default: Message } = await import('./Message')
    return this.createMessage(Message, propsData)
  }

  /**
   * 初始化 utils/Message
   * @method createMessage
   * @protected
   * @param  {Message}    Message   - utils/Message 对象
   * @param  {Object}     propsData - MnMessage props 属性的值
   * @return {Message}
   */
  createMessage (Message, propsData = {}) {
    const defaultData = { type: 'error', message: '网络异常错误，请刷新。' }
    return Message.create({ ...defaultData, ...propsData }).show()
  }

  /**
   * 异常错误，打开对应的 message
   * @method openExceptionMessage
   * @public
   * @param  {Object}             errorResponse - 错误信息
   * @return {Promise}
   */
  async openExceptionMessage (errorResponse) {
    return await this.openMessage()
  }
}
