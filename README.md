<p><img width="320" src="https://raw.githubusercontent.com/HumanUI/vue-human/master/docs/vue-human.jpg"></p>

<div>
  <a href="https://www.npmjs.com/package/vue-human" title="npm">
    <img src="https://img.shields.io/badge/npm-v2.5.6-orange.svg?style=flat-square">
  </a>
  <a href="https://minowu.gitbooks.io/vue-human" title="gitbook">
    <img src="https://img.shields.io/badge/gitbook-中文文档-brightgreen.svg?style=flat-square">
  </a>
  <span title="License MIT">
    <img src="https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square">
  </span>
</div>

[![NPM](https://nodei.co/npm/vue-human.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/vue-human)

`Vue Human` is designed for high quality user experience. It has rich interactive and animation component.

It has media response for multiple scenes, e.g. mobile, tablet, desktop. You can use vue-human to build your mobile application, desktop dashboard and more.

[Changelog](https://github.com/HumanUI/vue-human/releases)

## Using vue-human in your application

Step 1: Install vue-human to your project in your terminal.

``` bash
$ yarn add vue-human
```

Step 2: Must set babel loader for vue-human in your webpack.

> Install in Webpack 2

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

Step 3: Import vue-human and configuare it.

``` javascript
import Vue from 'vue'
import human from 'vue-human'

Vue.use(human)
```

Step 4: Import and load some components in vue file

``` javascript
import core from 'vue-human/suites/core'
import carousel from 'vue-human/suites/carousel'

export default {
  components: {
    ...core.map(),
    ...carousel.map()
  }
}
```

Step 5: More components and how to use them

* English Documentation (Need to contribute)
* [组件的中文文档](https://minowu.gitbooks.io/vue-human)

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
# Copy env file
$ cp ./examples/src/env/app.js ./examples/src/env/local.js

# Open the vue-human folder
# Then yarn install
$ yarn install

# Open browser in localhost:8888
$ yarn run dev

# Finally, you can help us to improve vue-human
```
