<p align="center"><img width="320" src="docs/vue-human.jpg"></p>

# Vue Human

> vue-human 2.1.0

# Install in your application

Step 1: In your terminal

``` bash
$ yarn add vue-human
```

Step 2: Must set babel in your webpack

> Install in Webpack 2.x

``` javascript
module: {
  rules: [
    {
      test: /vue-human[-\w]*\/.*?js$/,
      loader: 'babel-loader',
      exclude: /vue-human[-\w]*\/node_modules/
    }
  ]
}
```

> Install in Webpack 1.x

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
import human from 'vue-human'
import totalSuits from 'vue-human/suits/total'

Vue.use(human)
Vue.use(totalSuits)
```

# Recommend

You can use vue boilerplate

``` bash
npm install -g vue-cli

vue init HumanUI/webpack my-project
```
