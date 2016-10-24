<template>
  <div class="section">
    <div class="letter">
      <div class="letter-body">
        <h1>Vue Human</h1>
        <small>A component sets for vue & human UI.</small>
      </div>
    </div>

    <div class="card" v-for="menu in menus">
      <div class="card-header">
        <h3 class="card-title">{{ menu.title }}</h3>
      </div>
      <div class="card-lists">
        <div class="card-item is-link" @click="go(sub.route)" v-for="sub in menu.subMenus">
          <div class="card-item-addon"><mn-icon :name="sub.icon"></mn-icon></div>
          <div class="card-item-body">{{ sub.title }}</div>
        </div>
      </div>
    </div>
  </div>
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
                icon: 'wand',
                route: { path: '/bases/typography' }
              }
            ]
          },
          {
            title: 'Grids',
            subMenus: [
              {
                title: 'flex',
                icon: 'grid',
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
                icon: 'social-buffer',
                route: { path: '/components/popup' }
              },
              {
                title: 'bar',
                icon: 'ios-barcode',
                route: { path: '/components/bar' }
              },
              {
                title: 'tab',
                icon: 'ios-barcode',
                route: { path: '/components/tab' }
              }
            ]
          }
        ]
      }
    }
  }
</script>
