import Vue from 'vue'
import VueHuman from '../../src/index.js'
import components from '../../src/components'
// import resolveLoadingIcon from './resolve-loading-icon'
import DocsLayoutPage from '../components/layout/page'
import './styles.scss'

Vue.use(VueHuman)

VueHuman.add(components)
VueHuman.add(DocsLayoutPage, 'docs-layout-page')
