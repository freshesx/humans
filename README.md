<p align="center"><img width="320" src="docs/vue-human.jpg"></p>

# Vue Human

> vue-human 2.0-rc.2

# Install in your application

Step 1: In your terminal

``` bash
$ yarn add vue-human
```

Step 2: Must set babel in your webpack

``` javascript
loaders: [
  // Other loaders
  {
    test: /vue-human\/.*?js$/,
    loader: 'babel'
  }
]
```

Step 3: Import vue-human

``` javascript
import Vue from 'vue'
import VueHuman from 'vue-human'
import components from 'vue-human/total'
import './styles.scss'

Vue.use(VueHuman)
VueHuman.add(components)
```

# How to contribute

``` bash
# install dependencies
yarn install

# serve with hot reload at localhost:3000
npm run dev

# build for production with minification
npm run build

# run unit tests
# npm run unit

# run e2e tests
# npm run e2e

# run all tests
# npm test
```
