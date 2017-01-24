import Vue from 'vue'
import VueHuman from 'vue-human'
import components from 'vue-human/suits/total'
// import resolveLoadingIcon from './resolve-loading-icon'
import DocsLayoutPage from '../components/layout/page'
import './styles.scss'

Vue.use(VueHuman)

VueHuman.add(components)
VueHuman.add(DocsLayoutPage, 'docs-layout-page')
