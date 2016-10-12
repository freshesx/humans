import Scroller from './scroller/scroller.vue'
import Icon from './icon/icon.vue'
import Btn from './button/button.vue'
import Switch from './form/switch.vue'
import Select from './form/select.vue'
import Pre from './code/pre'
import Popup from './popup/popup'
import Image from './image/image'
import BlockImage from './image/block-image'
import element from './util/element'

export default {
  prefix: 'Mn',
  install (Vue, options) {
    Vue.component(`${this.prefix}Scroller`, Scroller)
    Vue.component(`${this.prefix}Icon`, Icon)
    Vue.component(`${this.prefix}Btn`, Btn)
    Vue.component(`${this.prefix}Switch`, Switch)
    Vue.component(`${this.prefix}Select`, Select)
    Vue.component(`${this.prefix}Pre`, Pre)
    Vue.component(`${this.prefix}Popup`, Popup)
    Vue.component(`${this.prefix}Image`, Image)
    Vue.component(`${this.prefix}BlockImage`, BlockImage)

    Vue.use(element)
  }
}
