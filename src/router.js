import Vue from 'vue'
import VueRouter from 'vue-router'
// import { saveScroll, setScroll } from './components/scroller/save'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      meta: { scroll: true },
      component: resolve => { require(['./docs/home'], resolve) }
    },
    {
      path: '/bases/colors',
      component: resolve => { require(['./docs/bases/colors'], resolve) }
    },
    {
      path: '/bases/typography',
      component: resolve => { require(['./docs/bases/typography'], resolve) }
    },
    {
      path: '/grids/flex',
      component: resolve => { require(['./docs/grids/flex'], resolve) }
    },
    {
      path: '/components/button',
      component: resolve => { require(['./docs/components/button'], resolve) }
    },
    {
      path: '/components/card',
      component: resolve => { require(['./docs/components/card'], resolve) }
    },
    {
      path: '/components/form',
      component: resolve => { require(['./docs/components/form'], resolve) }
    },
    {
      path: '/components/popup',
      component: resolve => { require(['./docs/components/popup'], resolve) }
    }
  ]
})
