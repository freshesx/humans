<p align="center">
  <img width="320" src="https://raw.githubusercontent.com/freshesx/humans/master/docs/vue-human.jpg">
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/vue-human" title="npm">
    <img src="https://badge.fury.io/js/vue-human.svg">
  </a>
  <a href="https://minowu.gitbooks.io/vue-human" title="gitbook">
    <img src="https://img.shields.io/badge/gitbook-中文文档-brightgreen.svg?style=flat-square">
  </a>
  <a href="https://gitter.im/HumanUI/Lobby" title="GITTER">
    <img src="https://img.shields.io/badge/gitter-chat-brightgreen.svg?style=flat-square">
  </a>
  <span title="License MIT">
    <img src="https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square">
  </span>
</p>

<p align="center">
  <a href="https://circleci.com/gh/freshesx/humans/tree/master" title="CircleCI">
    <img src="https://circleci.com/gh/freshesx/humans/tree/master.svg?style=svg">
  </a>
</p>

`Vue Human` 是为高质量用户体验而设计的组件库。他有丰富的交互和动画组件，有时他会比较顽固，坚持自己的设计理念，有时他又会比较性感，让你不经意间产生爱意。

他坚持响应式设计，各个组件兼顾移动端、平板、桌面游览器等多个不同屏幕尺寸的场景，你可以使用 Vue Human 构建自己的移动应用、中后台管理界面或者你想要做的别的事。

### 资料

* [HumanUI.github.io](https://HumanUI.github.io)
* [Changelog](./CHANGELOG.md)
* [GITTER 交流群](https://gitter.im/HumanUI/Lobby)
* [中文文档](https://minowu.gitbooks.io/vue-human)

### 参与和改进 Human 的开发

项目克隆至本地后，执行如下命令

``` bash
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
