import Vue from 'vue'
import isFunction from 'lodash/isFunction'

export default class AxiosHelper {
  message (error) {
    const funcName = `error${error.response.status}`

    if (isFunction(this[funcName])) {
      this[funcName](error)
    }
  }

  openErrorMessage (messageParams) {
    // 异步加载，优先保持其他前置组件优先完成加载
    require(['../util/message'], (resolve) => {
      resolve.default({ ...{ show: true, type: 'error' }, ...messageParams })
    })
  }

  error401 (response) {
    this.openErrorMessage({
      description: '帐户已注销，请重新登录。'
    })
  }

  error403 (response) {
    this.openErrorMessage({
      description: '您没有权限操作该功能。'
    })
  }

  // error404 (response) {
  //   this.openErrorMessage({
  //     description: '资源不存在或已删除。'
  //   })
  // }

  error500 (response) {
    this.openErrorMessage({
      description: '服务器出了一点故障，请稍后重试。'
    })
  }
}
