<template>
  <mn-dashboard-sidebar slot="sidebar" :show.sync="storage.showSidebar">
    <mn-scroller name="dashboard-side">
      <mn-section class="has-one-padding-all">
        <mn-search-bar>
          <mn-input v-model="search" placeholder="全局搜索"></mn-input>
        </mn-search-bar>
      </mn-section>

      <mn-section>
        <mn-dashboard-menu :menu="menu"></mn-dashboard-menu>
      </mn-section>

      <mn-section class="profile-box">
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
</template>

<script>
  import core from 'vue-human/suites/core'
  import dashboard from 'vue-human/suites/dashboard'
  import searchBar from 'vue-human/suites/searchBar'
  import input from 'vue-human/suites/input'
  import menu from '../base/menu'
  import storage from './storage'

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
        search: undefined,
        storage
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~vue-human/scss/mixins/media.scss";

  .profile-box {
    @include min-screen(tablet) {
      padding: 0 1rem;
    }
  }
</style>
