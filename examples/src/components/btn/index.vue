<template>
  <div>
    <h5>基本用法</h5>
    <div>
      <mn-btn theme="primary" :icon="icons.cart" @click="onPressButton">按钮</mn-btn>
      <mn-btn theme="secondary" @click="onPressButton">按钮 glass</mn-btn>
      <mn-btn theme="inverse">按钮</mn-btn>
      <mn-btn theme="warning">按钮</mn-btn>
      <mn-btn theme="error">按钮</mn-btn>
    </div>

    <h5>按钮尺寸</h5>
    <div>
      <mn-btn theme="primary" size="xs">xs</mn-btn>
      <mn-btn theme="primary" size="sm">sm</mn-btn>
      <mn-btn theme="primary">正常</mn-btn>
    </div>

    <h5>纯图标</h5>

    <div>
      <mn-btn theme="primary" :icon="icons.cart" size="sm"></mn-btn>
      <mn-btn theme="primary" :icon="icons.cart"></mn-btn>
      <!-- <mn-link theme="primary" :icon="icons.cart" size="sm"></mn-link> -->
    </div>

    <h5>状态和事件</h5>
    <div>
      <mn-btn theme="primary" @click="onPressButton">Normal</mn-btn>
      <mn-btn theme="primary" @click="onPressButton" active>Active</mn-btn>
      <mn-btn theme="primary" @click="onPressButton" @error="errorPressButton" disabled>Disabled</mn-btn>
    </div>

    <h5>圆形</h5>
    <div>
      <mn-btn theme="primary">按钮</mn-btn>
      <mn-btn theme="primary" circle>按钮</mn-btn>
      <mn-btn theme="primary" :icon="icons.cart" circle></mn-btn>
      <mn-btn theme="primary" circle size="sm">A</mn-btn>
      <mn-btn theme="primary" :icon="icons.cart" circle size="sm"></mn-btn>
    </div>

    <h5>块状</h5>
    <div>
      <mn-btn theme="primary" :icon="icons.cart" block margin>按钮</mn-btn>
      <mn-btn theme="secondary" block margin>按钮</mn-btn>
    </div>

    <!-- <h5>超链接按钮</h5>
    <mn-link theme="primary" :to="{ name: 'icon' }" :icon="icons.cart" block margin>按钮</mn-link> -->
  </div>
</template>

<script>
import { MnBtn } from '@freshes/human'

export default {
  components: {
    MnBtn
  },
  data () {
    return {
      icons: {
        cart: require('@freshes/icons/js/ios/cart')
      }
    }
  },
  methods: {
    onPressButton (event, button) {
      button.start()

      setTimeout(() => {
        window.alert('刚刚发生了加载动画')
        button.finish()
      }, 3000)
    },
    errorPressButton () {
      window.alert('当前按钮被禁用')
    }
  }
}
</script>
