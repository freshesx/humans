import message from './message.vue'
import Message from './Message.js'
import './index.scss'

const suite = {
  [message.name]: message
}

export {
  suite as message,
  Message
}
