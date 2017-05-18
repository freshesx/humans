import Env from 'vue-human/utils/Env'
import app from './app'
import local from './local'

Env.merge(app, local)
