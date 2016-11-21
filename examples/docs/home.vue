<template>
  <mn-rows>
    <mn-row>
      <mn-scroller save>
        <div class="section">
          <div class="letter">
            <div class="letter-body">
              <h1>Vue Human</h1>
              <small>A component sets for vue & human UI.</small>
            </div>
          </div>

          <mn-card v-for="menu in menus">
            <mn-card-item>
              {{ menu.title }}
            </mn-card-item>
            <mn-card-item type="link" @click.native="go(sub.route)" v-for="sub in menu.subMenus">
              <mn-icon slot="addon" :name="sub.icon"></mn-icon>
              <template slot="body">{{ sub.title }}</template>
            </mn-card-item>
          </mn-card>
        </div>
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
                route: { path: '/bases/colors' }
              },
              {
                title: 'typography',
                icon: 'ios-bookmarks',
                route: { path: '/bases/typography' }
              }
            ]
          },
          {
            title: 'Grids',
            subMenus: [
              {
                title: 'flex',
                icon: 'ios-box',
                route: { path: '/grids/flex' }
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
                title: 'slidebox',
                icon: 'ios-time-outline',
                route: { path: '/components/slidebox' }
              },
              {
                title: 'loading',
                icon: 'load-c',
                route: { path: '/components/loading' }
              }
            ]
          }
        ]
      }
    }
  }
</script>
