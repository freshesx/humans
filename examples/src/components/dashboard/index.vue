<template>
  <mn-dashboard :status="statusMenu">
    <div class="brand" slot="brand">
      <mn-icon :name="icons.logo" :width="44"></mn-icon>
    </div>

    <mn-dashboard-sidebar slot="sidebar" :show.sync="showSidebar">
      <mn-scroller name="dashboard-side">
        <mn-section class="has-one-padding-all">
          <mn-search-bar>
            <mn-input v-model="search" placeholder="全局搜索"></mn-input>
          </mn-search-bar>
        </mn-section>

        <mn-section>
          <mn-dashboard-menu :menu="menu"></mn-dashboard-menu>
        </mn-section>

        <mn-section class="has-one-padding-all">
          <mn-card theme="inverse">
            <mn-card-item>
              <mn-card-prefix>
                <mn-icon :name="icons.logo"></mn-icon>
              </mn-card-prefix>
              <mn-card-body>
                ChaselWu
              </mn-card-body>
            </mn-card-item>
          </mn-card>
        </mn-section>
      </mn-scroller>
    </mn-dashboard-sidebar>

    <mn-dashboard-status slot="suffix"
      :menu="statusMenu" :show.sync="showSidebar"></mn-dashboard-status>

    <mn-scroller>
      <div>Mainarea</div>
    </mn-scroller>
  </mn-dashboard>
</template>

<script>
  import core from 'vue-human/suites/core'
  import dashboard from 'vue-human/suites/dashboard'
  import searchBar from 'vue-human/suites/searchBar'
  import input from 'vue-human/suites/input'
  import menu from '../base/menu'

  export default {
    mixins: [ menu ],
    components: {
      ...core.map(),
      ...dashboard.map(),
      ...searchBar.map(),
      ...input.map()
    },
    data () {
      return {
        icons: {
          logo: require('vue-human-icons/js/ios/analytics')
        },
        showSidebar: false,
        search: undefined,
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

<style lang="scss" scoped>
  .brand {
    padding: 7px 0 0 1rem;
    color: #fff;
  }
</style>
