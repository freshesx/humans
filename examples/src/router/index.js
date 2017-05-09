import Vue from 'vue'
import VueRouter from 'vue-router'
import { closeAllPopups } from 'vue-human/components/popup/storage'

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
      path: '/flex',
      name: 'flex',
      component: resolve => { require(['../components/flex'], resolve) }
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
    },
    {
      path: '/cell',
      name: 'cell',
      component: resolve => { require(['../components/cell'], resolve) }
    },
    {
      path: '/image',
      name: 'image',
      component: resolve => { require(['../components/image'], resolve) }
    },
    {
      path: '/input',
      name: 'input',
      component: resolve => { require(['../components/input'], resolve) }
    },
    {
      path: '/form',
      name: 'form',
      component: resolve => { require(['../components/form'], resolve) }
    },
    {
      path: '/modal',
      name: 'modal',
      component: resolve => { require(['../components/modal'], resolve) }
    },
    {
      path: '/check',
      name: 'check',
      component: resolve => { require(['../components/check'], resolve) }
    },
    {
      path: '/carousel',
      name: 'carousel',
      component: resolve => { require(['../components/carousel'], resolve) }
    },
    {
      path: '/container',
      name: 'container',
      component: resolve => { require(['../components/container'], resolve) }
    },
    {
      path: '/message',
      name: 'message',
      component: resolve => { require(['../components/message'], resolve) }
    },
    {
      path: '/action-sheet',
      name: 'actionSheet',
      component: resolve => { require(['../components/action-sheet'], resolve) }
    }
  ]
})

router.beforeEach((to, from, next) => {
  closeAllPopups()
  next()
})

export default router
