import Vue from 'vue'
import Human from 'vue-human'
import core from 'vue-human/suites/core'
import locales from '../locale'
import './app.scss'

// Use Human
Vue.use(Human, { locales })

Vue.use(core)
