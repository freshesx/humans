import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: resolve => { require(['../components/home'], resolve) }
    },
    {
      path: '/button',
      name: 'button',
      component: resolve => { require(['../components/button'], resolve) }
    },
    {
      path: '/icon',
      name: 'icon',
      component: resolve => { require(['../components/icon'], resolve) }
    },
    {
      path: '/counter',
      name: 'counter',
      component: resolve => { require(['../components/counter'], resolve) }
    },
    {
      path: '/scroller',
      name: 'scroller',
      component: resolve => { require(['../components/scroller'], resolve) }
    },
    {
      path: '/column',
      name: 'column',
      component: resolve => { require(['../components/column'], resolve) }
    },
    {
      path: '/legacy-column',
      name: 'legacyColumn',
      component: resolve => { require(['../components/column/legacy'], resolve) }
    },
    {
      path: '/popup',
      name: 'popup',
      component: resolve => { require(['../components/popup'], resolve) }
    },
    {
      path: '/paginate',
      name: 'paginate',
      component: resolve => { require(['../components/paginate'], resolve) }
    }
  ]
})

export default router
