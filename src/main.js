import Vue from 'vue'
import router from './router'
import App from './app'
import VueHuman from '../components/index.js'
import './docs/docs.scss'

Vue.use(VueHuman)

/* eslint-disable no-unused-vars */
const app = new Vue({
  el: 'app',
  router,
  render: html => html(App)
})
