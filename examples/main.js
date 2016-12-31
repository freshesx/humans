import Vue from 'vue'
import router from './router'
import App from './app'
import './human'
import './vuelidate'

/* eslint-disable no-unused-vars */
const app = new Vue({
  el: 'app',
  router,
  render: html => html(App)
})
