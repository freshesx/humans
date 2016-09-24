import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './app'
import './components/icon'
import './components/button'
import './components/card'
import './components/pre'
import './docs/docs.scss'

Vue.use(VueRouter)

const router = new VueRouter()

router.map({
  '/': {
    component: resolve => {
      require(['./docs/home'], resolve)
    }
  },
  '/bases/colors': {
    component: resolve => {
      require(['./docs/bases/colors'], resolve)
    }
  },
  '/grids/flex': {
    component: resolve => {
      require(['./docs/grids/flex'], resolve)
    }
  },
  '/components/button': {
    component: resolve => {
      require(['./docs/components/button'], resolve)
    }
  },
  '/components/card': {
    component: resolve => {
      require(['./docs/components/card'], resolve)
    }
  },
  '/components/form': {
    component: resolve => {
      require(['./docs/components/form'], resolve)
    }
  }
})

router.start(App, 'app')
