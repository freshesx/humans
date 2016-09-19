import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './app'

Vue.use(VueRouter)

const router = new VueRouter()

router.map({
  '/bases/colors': {
    component: function (resolve) {
      require(['./components/colors'], resolve)
    }
  },
  '/grids/flex': {
    component: resolve => {
      require(['./components/grids/flex'], resolve)
    }
  }
})

router.start(App, 'app')
