<template>
  <page>
    <mn-letter>
      <mn-letter-body>
        <h1>Tab Bar</h1>
      </mn-letter-body>
    </mn-letter>
    <mn-tab-bar>
      <mn-tab-bar-item :icon="active === key ? item.activeIcon : item.icon"
        :title="item.title"
        :active="active === key"
        :badge="item.badge"
        @click="active = key"
        v-for="(item, key) in menu" :key="key"></mn-tab-bar-item>
    </mn-tab-bar>
  </page>
</template>

<script>
  import core from 'vue-human/suites/core'
  import tabBar from 'vue-human/suites/tabBar'
  import page from '../base/page'

  export default {
    components: {
      ...core.map(),
      ...tabBar.map(),
      page
    },
    data () {
      return {
        active: 0,
        newMessageBadge: 2,
        newMomentBadge: 20
      }
    },
    computed: {
      menu () {
        return [
          {
            title: 'WeChat',
            icon: require('vue-human-icons/js/ios/chatbubble-outline'),
            activeIcon: require('vue-human-icons/js/ios/chatbubble'),
            badge: this.newMessageBadge
          },
          {
            title: 'Contact',
            icon: require('vue-human-icons/js/ios/bookmarks-outline'),
            activeIcon: require('vue-human-icons/js/ios/bookmarks')
          },
          {
            title: 'Moments',
            icon: require('vue-human-icons/js/ios/world-outline'),
            activeIcon: require('vue-human-icons/js/ios/world'),
            badge: this.newMomentBadge
          },
          {
            title: 'Mine',
            icon: require('vue-human-icons/js/ios/person-outline'),
            activeIcon: require('vue-human-icons/js/ios/person')
          }
        ]
      }
    }
  }
</script>
