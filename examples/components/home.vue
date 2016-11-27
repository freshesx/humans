<template>
  <mn-rows>
    <mn-row>
      <mn-scroller save>
        <mn-section>
          <mn-letter>
            <h1>Vue Human</h1>
            <small>A component sets for vue & human UI.</small>
          </mn-letter>

          <mn-card v-for="menu in menus">
            <mn-card-item>
              {{ menu.title }}
            </mn-card-item>
            <mn-card-item type="link" @click.native="go(sub.route)" v-for="sub in menu.subMenus">
              <mn-icon slot="addon" :name="sub.icon"></mn-icon>
              <template slot="body">{{ sub.title }}</template>
            </mn-card-item>
          </mn-card>
        </mn-section>
      </mn-scroller>
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
            title: 'Grids',
            subMenus: [
              {
                title: 'Column',
                icon: 'ios-box',
                route: { path: '/components/column' }
              }
            ]
          },
          {
            title: 'Components',
            subMenus: [
              {
                title: 'icon',
                icon: 'ios-analytics',
                route: { path: '/components/icon' }
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
                title: 'form',
                icon: 'ios-list',
                route: { path: '/components/form' }
              },
              {
                title: 'popup',
                icon: 'ios-browsers-outline',
                route: { path: '/components/popup' }
              },
              {
                title: 'search-bar',
                icon: 'ios-barcode',
                route: { path: '/components/search-bar' }
              },
              {
                title: 'tab',
                icon: 'ios-barcode-outline',
                route: { path: '/components/tab' }
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
              },
              {
                title: 'loading',
                icon: 'ios-reload',
                route: { path: '/components/loading' }
              }
            ]
          }
        ]
      }
    }
  }
</script>
