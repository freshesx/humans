# Message 消息

### 属性

title
message
icon
type
autoClose
duration
closeIcon

### 事件

click

```
this.messageLayer = Message.create().show()

this.messageLayer.on('click', (event, vm) => {
  // do something
  if (this.messageLayer) this.messageLayer.destroy()
})
```

### 方法

无

### 数据

无

### 插槽

无
