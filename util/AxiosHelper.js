import Vue from 'vue'
import isFunction from 'lodash/isFunction'

/** Class axios helper for user */
export default class AxiosHelper {
  /**
   * Handle axios error message
   * @param {Object} error - axios return error
   * @return {void}
   */
  error (error) {
    // If error doesn't has response
    // So, use default exception error
    if (!error.response) {
      return this.errorException(error)
    }

    // Build errorxxx function
    const funcName = `error${error.response.status}`

    if (isFunction(this[funcName])) {
      this[funcName](error)
    }
  }

  /**
   * Open error type message
   * @param {Object} messageParams
   * @return {void}
   */
  openErrorMessage (messageParams) {
    // 异步加载，优先保持其他前置组件优先完成加载
    require(['../util/message'], (resolve) => {
      resolve.default({ ...{ show: true, type: 'error' }, ...messageParams })
    })
  }

  /**
   * Default exception error
   */
  errorException (error) {
    this.openErrorMessage({
      description: '网络异常错误，请刷新。'
    })
  }

  /**
   * 401 Unauthorized
   * @protected
   * @param {Object} error
   */
  $error401 (error) {
    this.openErrorMessage({
      description: '帐户已注销，请重新登录。'
    })
  }

  /**
   * 403 Forbidden
   * @protected
   * @param {Object} error
   */
  $error403 (error) {
    this.openErrorMessage({
      description: '您没有权限操作该功能。'
    })
  }

  /**
   * 404 Not Found
   * @protected
   * @param {Object} error
   */
  $error404 (error) {
    this.openErrorMessage({
      description: '资源不存在或已删除。'
    })
  }

  /**
   * 500 Internal Server Error
   * @protected
   * @param {Object} error
   */
  $error500 (error) {
    this.openErrorMessage({
      description: '服务器出了一点故障，请稍后重试。'
    })
  }
}
