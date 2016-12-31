import Vue from 'vue'
import VueHuman from '../../src/index.js'
// import resolveLoadingIcon from './resolve-loading-icon'
import './styles.scss'
import DocsLayoutPage from '../components/layout/page'

Vue.use(VueHuman, {
  // Using custom icon
  // loading: resolveLoadingIcon
})

// Using page layout
Vue.component('DocsLayoutPage', DocsLayoutPage)
