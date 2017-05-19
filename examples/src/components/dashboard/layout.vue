<template>
  <mn-dashboard>
    <!-- Brand -->
    <mn-dashboard-brand slot="brand" class="brand"
      @click.native="$router.push({ name: 'homepage' })">
      <mn-icon :name="icons.logo" :width="44"></mn-icon>
    </mn-dashboard-brand>

    <!-- Side Bar -->
    <mn-side-bar slot="sideBar" :show.sync="showSidebar">
      <mn-scroller name="dashboard-side">
        <mn-section class="has-one-padding-all">
          <mn-search-bar>
            <mn-input v-model="search" placeholder="全局搜索"></mn-input>
          </mn-search-bar>
        </mn-section>

        <mn-section>
          <mn-side-bar-menu :menu="menu"></mn-side-bar-menu>
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
    </mn-side-bar>

    <!-- Body -->
    <mn-dashboard-body>
      <slot>
        <router-view></router-view>
      </slot>
    </mn-dashboard-body>

    <!-- Assistive Bar -->
    <mn-assistive-bar slot="footer" :show.sync="showSidebar"></mn-assistive-bar>
  </mn-dashboard>
</template>

<script>
  import core from 'vue-human/suites/core'
  import dashboard from 'vue-human/suites/dashboard'
  import assistiveBar from 'vue-human/suites/assistiveBar'
  import searchBar from 'vue-human/suites/searchBar'
  import sideBar from 'vue-human/suites/sideBar'
  import input from 'vue-human/suites/input'
  import menu from '../base/menu'

  export default {
    components: {
      ...core.map(),
      ...dashboard.map(),
      ...assistiveBar.map(),
      ...searchBar.map(),
      ...sideBar.map(),
      ...input.map()
    },
    data () {
      return {
        showSidebar: false,
        search: undefined,
        menu,
        icons: {
          logo: require('vue-human-icons/js/ios/analytics')
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~vue-human/scss/mixins/media.scss";

  .brand {
    padding: 7px 0 0 1rem;
    color: #fff;
    cursor: pointer;
  }

  .profile-box {
    @include min-screen(tablet) {
      padding: 0 1rem;
    }
  }
</style>
