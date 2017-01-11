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
        <mn-tab-bar-pane title="Bases" icon="ios-home">
        </mn-tab-bar-pane>
        <mn-tab-bar-pane title="Core" icon="ios-albums-outline">
        </mn-tab-bar-pane>
        <mn-tab-bar-pane title="More" icon="ios-cloud-outline">
        </mn-tab-bar-pane>
        <mn-tab-bar-pane title="Github" icon="ios-people">
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
        pause: false,
        menus: [
          {
            title: 'Bases',
            subMenus: [
              {
                title: 'colors',
                icon: 'ios-color-filter',
                route: { path: '/components/colors' }
              },
              {
                title: 'typography',
                icon: 'ios-bookmarks',
                route: { path: '/components/typography' }
              }
            ]
          },
          {
            title: 'Core components',
            subMenus: [
              {
                title: 'column',
                icon: 'ios-box',
                route: { path: '/components/column' }
              },
              {
                title: 'button',
                icon: 'ios-paperplane',
                route: { path: '/components/button' }
              },
              {
                title: 'card',
                icon: 'ios-photos',
                route: { path: '/components/card' }
              },
              {
                title: 'popup',
                icon: 'ios-browsers-outline',
                route: { path: '/components/popup' }
              },
              {
                title: 'loading icon',
                icon: 'ios-reload',
                route: { path: '/components/loading' }
              }
            ]
          },
          {
            title: 'More Components',
            subMenus: [
              {
                title: 'icon',
                icon: 'ios-analytics',
                route: { path: '/components/icon' }
              },
              {
                title: 'form',
                icon: 'ios-list',
                route: { path: '/components/form' }
              },
              {
                title: 'tag',
                icon: 'ios-pricetags-outline',
                route: { path: '/components/tag' }
              },
              {
                title: 'rate',
                icon: 'ios-star',
                route: { path: '/components/rate' }
              },
              {
                title: 'collapse',
                icon: 'ios-arrow-down',
                route: { path: '/components/collapse' }
              },
              {
                title: 'slide-bar',
                icon: 'ios-time-outline',
                route: { path: '/components/slide-bar' }
              }
            ]
          }
        ]
      }
    }
  }
</script>
