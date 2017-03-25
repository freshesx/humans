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
    }
  ]
})

export default router
