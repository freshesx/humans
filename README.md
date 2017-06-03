<p align="center">
  <img width="320" src="https://raw.githubusercontent.com/HumanUI/vue-human/master/docs/vue-human.jpg">
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/vue-human" title="npm">
    <img src="https://badge.fury.io/js/vue-human.svg">
  </a>
  <a href="https://minowu.gitbooks.io/vue-human" title="gitbook">
    <img src="https://img.shields.io/badge/gitbook-中文文档-brightgreen.svg?style=flat-square">
  </a>
  <span title="License MIT">
    <img src="https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square">
  </span>
</p>

<p align="center">
  <a href="https://circleci.com/gh/HumanUI/vue-human/tree/master" title="CircleCI">
    <img src="https://circleci.com/gh/HumanUI/vue-human/tree/master.svg?style=svg">
  </a>
</p>

`Vue Human` is designed for high quality user experience. It has rich interactive and animation component.

It has media response for multiple scenes, e.g. mobile, tablet, desktop. You can use vue-human to build your mobile application, desktop dashboard and more.

[Changelog](https://github.com/HumanUI/vue-human/releases)

### 资料

* [HumanUI.github.io](https://HumanUI.github.io)
* [中文文档](https://minowu.gitbooks.io/vue-human)

### 改进 Human

项目克隆至本地后，执行如下命令

``` bash
# Copy env file
$ cp ./examples/src/env/app.js ./examples/src/env/local.js

# Open the vue-human folder
# Then yarn install
$ yarn install

# Open browser in localhost:8888
$ yarn start

# Finally, you can help us to improve vue-human

# Unit tests
$ yarn run unit
```

### 在项目中使用

vue-human 依赖非常的 npm 包，需要 babel 转换，sass 编译，vue-loader 处理等等，所以建议先通过 vue-cli 来创建 vue-human 专属的脚手架来熟悉 vue-human 的依赖，我们 fork 了 vuejs-templates/webpack 项目，并添加了 vue-human 需要的各种插件。

通过查看 [HumanUI/webpack 的文档](https://github.com/HumanUI/webpack) 来了解如何创建和使用 vue-human 项目。

展示部分 vue-human 的使用语法，但具体如何使用建议查看文档与脚手架。

``` javascript
// 配置文件 human.js
import Vue from 'vue'
import human from 'vue-human'
import core from 'vue-human/suites/core'

Vue.use(human)
Vue.use(core)
```

``` vue
// 某个页面内使用轮播图 carousel.vue
<script>
  import carousel from 'vue-human/suites/carousel'

  export default {
    components: {
      ...carousel.map()
    }
  }
</script>
```

### 帮助

* 如果有什么 Bug、使用问题、功能建议，请在 github issues 内发布。
