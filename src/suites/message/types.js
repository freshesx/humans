import chatbubble from 'vue-human-icons/js/ios/chatbubble'
import checkmark from 'vue-human-icons/js/ios/checkmark'
import close from 'vue-human-icons/js/ios/close'
import information from 'vue-human-icons/js/ios/information'

export default {
  default: { text: '新消息', icon: chatbubble, color: 'black' },
  primary: { text: '操作成功', icon: checkmark, color: 'green' },
  success: { text: '操作成功', icon: checkmark, color: 'green' },
  warning: { text: '注意', icon: information, color: 'orange' },
  error: { text: '发生了错误', icon: close, color: 'pink' }
}
