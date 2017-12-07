## 2.8.3

* 【更新】更新 datetime range 的结束时间默认设定的逻辑，保持初始值。

## 2.8.2

* 【修复】修复 actionSheet 和 cell 的 translate bug

## 2.8.1

* 【修复】修复 date 的位数问题

## 2.8.0

* 【删除】移除 vue-i18n 库和多语言功能的实现，删除 locale 文件夹
* 【样式】调整 Message 至最新的样式
* 【新增】为 Message 新增 click 事件
* 【删除】删除 carousel 的左右点击切换上下张的能力

## 2.7.3

### /suites/carousel/carousel

* 【新增】循环轮播方法 this.refs.carousel.autoplay(true)
* 【新增】修改 item 长度的方法 this.refs.carousel.setLength(3)
* 【新增】setIndex, nextIndex, prevIndex 三个方案
* 【新增】点击 carousel 时，实现左右切换

## 2.7.2

### /suites/image/image

* 【修复】允许 image source 为空，依然显示占位符

## 2.7.1

### /suites/core

* 【补充】将 image 组件加入 core suites

## 2.7.0

### /suites/image/image

* 【重构】重构 image 组件，实现预占位，和加载过渡

### /suites/message/message

* 【样式】box-shadow 被覆盖
* 【修复】缺少 z-index

### /utils/Element

* 【更新】新增 Element.prototype.insert 方法，兼容 vue 2.5

## 2.6.11

### /suites/input/input

* 【样式】更新 input 清除按钮的样式

### /suites/link/link

* 【结构】将 link 组件从 button 组件目录下独立
* 【功能】link 组件未设定 href 和 to 值时，默认设置 javascript:void(0)

### /utils/Query

* 【辅助】新增 merge 方法
* 【辅助】将 Query.sync 方法标记为即将删除

## 2.6.10

* 无更新

## 2.6.9

### /suites/counter/counter

* 【修复】当计数器内输入非数字时，应该默认修正为原数字，仅允许输入数字。

## 2.6.8

### /suites/button/link

* 修复 link 与 button 表现不一致的 bug，由为 button 更换 icon loading 导致。

## 2.6.7

### /suites/datetime/datetime

* 修复 setMonth 使用 bug（https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth）。

## 2.6.6

### 表格

* 优化表格组件的功能和布局，表格组件属于 beta 版本，可能会有部分修改。

## 2.6.5

### 侧边栏

* [sideBarMenu] 修改调用自身时的命名。

## 2.6.4

### 按钮

* 为按钮添加 start 和 finish 方法，用于控制 data.loading 开启与关闭；
* 新增 “loading” 事件，如果按钮处于载入状态时被点击则触发该事件；
* 添加 props.name 属性，对应 button name 属性 （https://www.w3.org/TR/2012/WD-html-markup-20120315/button.button.html#button.button）；
* 移除已经弃用的 props.type。
