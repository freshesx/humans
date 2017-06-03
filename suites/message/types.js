import chatbubble from 'vue-human-icons/js/ios/chatbubble'
import checkmark from 'vue-human-icons/js/ios/checkmark'
import close from 'vue-human-icons/js/ios/close'
import information from 'vue-human-icons/js/ios/information'

export default {
  default: { text: 'Message', icon: chatbubble, color: 'black' },
  primary: { text: 'Success', icon: checkmark, color: 'green' },
  success: { text: 'Success', icon: checkmark, color: 'green' },
  warning: { text: 'Warning', icon: information, color: 'orange' },
  error: { text: 'Error', icon: close, color: 'pink' }
}
