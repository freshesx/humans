import isFunction from 'lodash/isFunction'

/** Class axios helper for user */
export default class AxiosHelper {
  /**
   * Handle axios error message
   * @param {Object} error - axios return error
   * @return {void}
   */
  error (errorDate) {
    // If error doesn't has response
    // So, use default exception error
    if (!errorDate.response) {
      return this.errorException(errorDate)
    }

    // Build errorxxx function
    const funcName = `error${errorDate.response.status}`

    if (isFunction(this[funcName])) {
      return this[funcName](errorDate)
    }

    return '未定义 error 处理方式'
  }

  /**
   * Open error type message
   * @param {Object} messageParams
   * @return {void}
   */
  openErrorMessage (messageParams) {
    // 异步加载，优先保持其他前置组件优先完成加载
    require(['./Message'], (resolve) => {
      this.createMessage(resolve.default, messageParams)
    })

    return this
  }

  /**
   * Create Message
   * @protected
   * @param  {Message}     Message
   * @param  {Object}     messageParams
   * @return {Message}
   */
  createMessage (Message, messageParams) {
    const message = Message.create({
      ...{ type: 'error' }, ...messageParams
    })
    return message.show()
  }

  /**
   * Default exception error
   */
  errorException (errorDate) {
    return this.openErrorMessage({
      description: '网络异常错误，请刷新。'
    })
  }

  /**
   * 401 Unauthorized
   * @protected
   * @param {Object} error
   */
  $error401 (errorDate) {
    return this.openErrorMessage({
      description: '帐户已注销，请重新登录。'
    })
  }

  /**
   * 403 Forbidden
   * @protected
   * @param {Object} error
   */
  $error403 (errorDate) {
    return this.openErrorMessage({
      description: '您没有权限操作该功能。'
    })
  }

  /**
   * 404 Not Found
   * @protected
   * @param {Object} error
   */
  $error404 (errorDate) {
    return this.openErrorMessage({
      description: '资源不存在或已删除。'
    })
  }

  /**
   * 500 Internal Server Error
   * @protected
   * @param {Object} error
   */
  $error500 (errorDate) {
    return this.openErrorMessage({
      description: '服务器出了一点故障，请稍后重试。'
    })
  }
}
