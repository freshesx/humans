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
