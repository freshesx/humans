<template>
  <mn-rows>
    <mn-row>
      <mn-scroller save>
        <mn-section>
          <mn-letter>
            <mn-letter-body>
              <h1>Vue Human</h1>
              <small>A component sets for vue & human UI.</small>
            </mn-letter-body>
          </mn-letter>

          <mn-card v-for="menu in menus">
            <mn-card-item>
              <h5>{{ menu.title }}</h5>
            </mn-card-item>
            <mn-card-item type="link" @click.native="go(sub.route)" v-for="sub in menu.subMenus">
              <mn-card-prefix><mn-icon :name="sub.icon"></mn-icon></mn-card-prefix>
              <mn-card-body>{{ sub.title }}</mn-card-body>
            </mn-card-item>
          </mn-card>
        </mn-section>
      </mn-scroller>
    </mn-row>
    <mn-row fixed>
      <mn-tab-bar>
        <mn-tab-bar-pane title="Bases" :icon="iosHome">
        </mn-tab-bar-pane>
        <mn-tab-bar-pane title="Core" :icon="iosAlbumsOutline">
        </mn-tab-bar-pane>
        <mn-tab-bar-pane title="More" :icon="iosCloudOutline">
        </mn-tab-bar-pane>
        <mn-tab-bar-pane title="Github" :icon="iosPeople">
        </mn-tab-bar-pane>
      </mn-tab-bar>
    </mn-row>
  </mn-rows>
</template>

<script>
  export default {
    methods: {
      go (link) {
        this.$router.push(link)
      }
    },
    data () {
      return {
        iosHome: require('vue-human-icons/js/ios/home'),
        iosAlbumsOutline: require('vue-human-icons/js/ios/albums-outline'),
        iosCloudOutline: require('vue-human-icons/js/ios/cloud-outline'),
        iosPeople: require('vue-human-icons/js/ios/people'),
        pause: false,
        menus: [
          {
            title: 'Bases',
            subMenus: [
              {
                title: 'colors',
                icon: require('vue-human-icons/js/ios/color-filter'),
                route: { path: '/components/colors' }
              },
              {
                title: 'typography',
                icon: require('vue-human-icons/js/ios/bookmarks'),
                route: { path: '/components/typography' }
              }
            ]
          },
          {
            title: 'Core components',
            subMenus: [
              {
                title: 'column',
                icon: require('vue-human-icons/js/ios/box'),
                route: { path: '/components/column' }
              },
              {
                title: 'button',
                icon: require('vue-human-icons/js/ios/paperplane'),
                route: { path: '/components/button' }
              },
              {
                title: 'card',
                icon: require('vue-human-icons/js/ios/photos'),
                route: { path: '/components/card' }
              },
              {
                title: 'popup',
                icon: require('vue-human-icons/js/ios/browsers-outline'),
                route: { path: '/components/popup' }
              },
              {
                title: 'loading icon',
                icon: require('vue-human-icons/js/ios/reload'),
                route: { path: '/components/loading' }
              }
            ]
          },
          {
            title: 'More Components',
            subMenus: [
              {
                title: 'form',
                icon: require('vue-human-icons/js/ios/list'),
                route: { path: '/components/form' }
              },
              {
                title: 'tag',
                icon: require('vue-human-icons/js/ios/pricetags-outline'),
                route: { path: '/components/tag' }
              },
              {
                title: 'rate',
                icon: require('vue-human-icons/js/ios/star'),
                route: { path: '/components/rate' }
              },
              {
                title: 'menu',
                icon: require('vue-human-icons/js/ios/arrow-down'),
                route: { path: '/components/menu' }
              },
              {
                title: 'slide-bar',
                icon: require('vue-human-icons/js/ios/time-outline'),
                route: { path: '/components/slide-bar' }
              }
            ]
          }
        ]
      }
    }
  }
</script>
