import Vue from 'vue'
import router from './router'
import app from './app'

new Vue({
  el: '#app',
  router,
  render: h => h(app)
})
