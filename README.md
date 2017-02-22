<p align="center"><img width="320" src="docs/vue-human.jpg"></p>

# Vue Human

> vue-human 2.0-rc.7

# Install in your application

Step 1: In your terminal

``` bash
$ yarn add vue-human
```

Step 2: Must set babel in your webpack

``` javascript
loaders: [
  {
    test: /vue-human[-\w]*\/.*?js$/,
    loader: 'babel',
    exclude: /vue-human[-\w]*\/node_modules/
  }
]
```

Step 3: Import vue-human

``` javascript
import Vue from 'vue'
import VueHuman from 'vue-human'
import components from 'vue-human/suits/total'

Vue.use(VueHuman)
VueHuman.add(components)
```

# Recommend

You can use vue boilerplate

``` bash
npm install -g vue-cli

vue init VitualReaty/webpack my-project
```
