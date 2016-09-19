import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './app'

Vue.use(VueRouter)

const router = new VueRouter()

router.map({
  '/bases/colors': {
    component: function (resolve) {
      require(['./docs/bases/colors'], resolve)
    }
  },
  '/grids/flex': {
    component: resolve => {
      require(['./docs/grids/flex'], resolve)
    }
  },
  '/components/card': {
    component: resolve => {
      require(['./docs/components/card'], resolve)
    }
  }
})

router.start(App, 'app')
