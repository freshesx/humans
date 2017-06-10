import 'babel-polyfill'
import Vue from 'vue'
import Human from '../../index.js'

Vue.use(Human)

Vue.config.productionTip = false

// require all test files (files that ends with .spec.js)
const testsContext = require.context('./specs', true, /\.spec$/)
testsContext.keys().forEach(testsContext)

// For components coverage
// const componentsContext = require.context('../../suites', true, /\.*?(js|vue|scss)$/)
// componentsContext.keys().forEach(componentsContext)

const utilContext = require.context('../../utils', true, /\.*?(js|scss|sass|css)$/)
utilContext.keys().forEach(utilContext)
