import 'babel-polyfill'
import Vue from 'vue'
import human from './human'
import router from './router'
import vuelidate from './vuelidate'
import app from './app'

Vue.config.productionTip = process.env.NODE_ENV !== 'production'

new Vue({
  el: '#app',
  human,
  router,
  vuelidate,
  render: h => h(app)
})
