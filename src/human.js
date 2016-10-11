import Scroller from './components/scroller/scroller.vue'
import Icon from './components/icon/icon.vue'
import Btn from './components/button/button.vue'
import Switch from './components/form/switch.vue'
import Select from './components/form/select.vue'
import Pre from './components/code/pre'
import Popup from './components/popup/popup'
import Image from './components/image/image'
import BlockImage from './components/image/block-image'
import element from './components/util/element'

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
