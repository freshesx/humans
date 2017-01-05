import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      meta: { scroll: true },
      component: resolve => { require(['./components/home'], resolve) }
    },
    {
      path: '/components/colors',
      component: resolve => { require(['./components/colors'], resolve) }
    },
    {
      path: '/components/typography',
      component: resolve => { require(['./components/typography'], resolve) }
    },
    {
      path: '/components/column',
      component: resolve => { require(['./components/column'], resolve) }
    },
    {
      path: '/components/button',
      component: resolve => { require(['./components/button'], resolve) }
    },
    {
      path: '/components/card',
      component: resolve => { require(['./components/card'], resolve) }
    },
    {
      path: '/components/form',
      component: resolve => { require(['./components/form'], resolve) }
    },
    {
      path: '/components/popup',
      component: resolve => { require(['./components/popup'], resolve) }
    },
    {
      path: '/components/tag',
      component: resolve => { require(['./components/tag'], resolve) }
    },
    {
      path: '/components/rate',
      component: resolve => { require(['./components/rate'], resolve) }
    },
    {
      path: '/components/collapse',
      component: resolve => { require(['./components/collapse'], resolve) }
    },
    {
      path: '/components/slide-bar',
      component: resolve => { require(['./components/slide-bar'], resolve) }
    },
    {
      path: '/components/loading',
      component: resolve => { require(['./components/loading'], resolve) }
    }
  ]
})

router.beforeEach((to, from, next) => {
  Vue.human.saveScroll(from)
  next()
})

router.afterEach((to, from, next) => {
  Vue.human.setScroll(to)
})

export default router
