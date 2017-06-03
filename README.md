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

### 参与和改进 Human 的开发

项目克隆至本地后，执行如下命令

``` bash
# 复制本地环境文件，不然 start 后会报错
$ cp ./examples/src/env/app.js ./examples/src/env/local.js

# 安装依赖包
$ yarn install

# 游览器访问 localhost:8888
$ yarn start

# 单元测试的命令
$ yarn run unit
```

### 在你的项目中使用

vue-human 为了实现按需加载，所以采用了大量的 ES6 语法，以及未编译成固定的 JS 文件，所以在开发中会依赖非常多的 npm 包，需要 babel 转换，sass 编译，vue-loader 处理等等，所以建议通过 vue-cli 来创建 vue-human 项目。

非常重要的部分，具体安装方法查看 [HumanUI/webpack](https://github.com/HumanUI/webpack) 的文档来了解如何创建和使用 vue-human 项目。

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
<!-- 某个页面内使用轮播图 carousel.vue -->
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
