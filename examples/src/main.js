import Vue from 'vue'
import router from './router'
import app from './app'
import '@freshes/base/dist/main.css'

new Vue({
  el: '#app',
  router,
  render: h => h(app)
})
