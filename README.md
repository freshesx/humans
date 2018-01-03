# Humans [![CircleCI](https://circleci.com/gh/freshesx/humans.svg?style=svg)](https://circleci.com/gh/freshesx/humans)

Humans is designed for mobile and desktop for human users. And it is vue-based implementation. To help developer to build UI quickly.

* An enterprise-class UI components.
* Load on demand.
* Responsive web design for mobile and desktop.
* Focus on application client development.

## Documentation

* Quick Start
* API Reference
* Tutorial
* Contributing Guide

## Quick Start

### install dependencies

``` shell
yarn add @humans/base @human/btn
```

### use dependencies

`main.js`

``` javascript
import '@humans/base'
```

`homepage.vue`

``` vue
<template>
  <mn-btn theme="primary" @click="click">Button</mn-btn>
</template>

<script>
import { btn } from '@humans/btn'

export default {
  components: {
    ...btn
  },
  methods: {
    click (event, btn) {
      btn.start()
      // Do something...
      // After something...
      btn.finish()
    }
  }
}
</script>
```

## Contributing Guide

### How to run the project in your system

##### install

``` shell
$ git clone git@github.com:freshesx/humans.git
$ git checkout next-3
$ yarn install
$ lerna bootstrap  # install packages for every packages
```

##### run examples

``` shell
$ yarn run build     # you need build packages before start
$ yarn start
```

##### build packages

``` shell
$ yarn run build
$ yarn run build --watch    # you can add watch
```

##### run test

``` shell
$ yarn test
```

##### build api docs

``` shell
$ yarn run docs:api
```

##### build vue docs and open it in browser

``` shell
$ yarn run docs:vue
```
