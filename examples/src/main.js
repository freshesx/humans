import Vue from 'vue'
import human from '@humans/base'
import router from './router'
import app from './app'

new Vue({
  el: '#app',
  human,
  router,
  render: h => h(app)
})
