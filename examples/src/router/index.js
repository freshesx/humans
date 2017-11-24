import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/loading-icon',
      name: 'loadingIcon',
      component: resolve => { require(['../components/loadingIcon'], resolve) }
    },
    {
      path: '/icon',
      name: 'icon',
      component: resolve => { require(['../components/icon'], resolve) }
    },
    {
      path: '/card',
      name: 'card',
      component: resolve => { require(['../components/card'], resolve) }
    }
  ]
})

export default router
