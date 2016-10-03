import Vue from 'vue'
import VueRouter from 'vue-router'
// import { saveScroll, setScroll } from './components/scroller/save'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      meta: {},
      component: resolve => { require(['./docs/home'], resolve) }
    }
  ]
})
