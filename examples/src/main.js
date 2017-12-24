import Vue from 'vue'
import human from './human'
import router from './router'
import vuelidate from './vuelidate'
import app from './app'

new Vue({
  el: '#app',
  human,
  router,
  vuelidate,
  render: h => h(app)
})
