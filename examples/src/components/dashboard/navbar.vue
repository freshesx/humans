<template>
  <mn-dashboard-navbar slot="navbar"
    :menu="statusMenu" :show.sync="storage.showSidebar"></mn-dashboard-navbar>
</template>

<script>
  import core from 'vue-human/suites/core'
  import dashboard from 'vue-human/suites/dashboard'
  import storage from './storage'

  export default {
    components: {
      ...core.map(),
      ...dashboard.map()
    },
    data () {
      return {
        storage,
        statusMenu: [
          {
            name: '首页',
            icon: require('vue-human-icons/js/ios/world'),
            push: { name: 'dashboard' }
          },
          {
            name: '资料库',
            icon: require('vue-human-icons/js/ios/box'),
            push: { name: 'homepage' }
          },
          {
            name: '购物袋',
            icon: require('vue-human-icons/js/ios/cart'),
            push: { name: 'homepage' }
          },
          {
            name: '我的',
            icon: require('vue-human-icons/js/ios/contact'),
            push: { name: 'homepage' }
          }
        ]
      }
    }
  }
</script>
