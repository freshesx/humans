<template>
  <div>
    <mn-icon :name="icons.contact"></mn-icon> 你好
    <mn-icon :name="icons.contact" :scale="2.25"></mn-icon> 你好
    <h5><mn-icon :name="icons.nothing"></mn-icon> svg 不存在</h5>
    <mn-icon :name="icons.contact" :loading="loading"></mn-icon> 通讯录
  </div>
</template>

<script>
  import { icon } from '@humans/icon'

  export default {
    components: {
      ...icon
    },
    data () {
      return {
        icons: {
          contact: require('@freshes/icons/js/ios/contact-outline'),
          nothing: undefined
        },
        loading: false
      }
    }
  }
</script>
