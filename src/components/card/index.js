import Vue from 'vue'
import Card from './card'
import CardHeading from './card-heading'
import CardTitle from './card-title'
import CardControls from './card-controls'
import CardBlock from './card-block'

const prefix = 'Mn'

Vue.component(`${prefix}Card`, Card)
Vue.component(`${prefix}CardHeading`, CardHeading)
Vue.component(`${prefix}CardTitle`, CardTitle)
Vue.component(`${prefix}CardControls`, CardControls)
Vue.component(`${prefix}CardBlock`, CardBlock)
