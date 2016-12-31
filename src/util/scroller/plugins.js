import Scroller from './scroller'

const scroller = new Scroller()

export default {
  install (Vue) {
    Vue.human.saveScroll = from => {
      scroller.saveScroll(from, Vue)
    }

    Vue.human.setScroll = to => {
      scroller.setScroll(to, Vue)
    }
  }
}
