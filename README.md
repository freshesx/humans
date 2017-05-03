<p><img width="320" src="https://raw.githubusercontent.com/HumanUI/vue-human/master/docs/vue-human.jpg"></p>

[![npm](https://img.shields.io/badge/npm-v2.3.5-orange.svg?style=flat-square)](https://www.npmjs.com/package/vue-human)

`Vue Human` is designed for high quality user experience. It has rich interactive and animation component.

It has media response for multiple scenes, e.g. mobile, tablet, desktop. You can use vue-human to build your mobile application, desktop dashboard and more.

## Lasted Version

v2.3.5 ([Changelog](https://github.com/HumanUI/vue-human/releases))

## Using vue-human in your application

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

## Recommend

You can use vue boilerplate

``` bash
# Install vue-cli
# @see(https://github.com/vuejs/vue-cli)
$ npm install -g vue-cli

# Init vue project with vue-human
# How to use vue-cli and webpack boilerplate, you can
# @see(https://github.com/humanUI/webpack)
$ vue init HumanUI/webpack my-project
```

## Develop vue-human in your computer

``` bash
# Open the vue-human folder
# Then yarn install
$ yarn install

# Open browser in localhost:8888
$ yarn run dev

# Finally, you can help us to improve vue-human
```
