<template>
  <mn-dashboard>
    <!-- Brand -->
    <mn-dashboard-brand slot="brand" class="brand"
      @click.native="$router.push({ name: 'homepage' })">
      <mn-icon :name="icons.logo" :width="44"></mn-icon>
      <span class="title">Freshes</span>
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
          <img src="https://ois1yok9v.qnssl.com/example-avator.png"
            class="profile-box-avator">
          <div class="profile-box-summary">
            <div class="profile-box-title">Some</div>
            <small class="profile-box-action">个人设置</small>
          </div>
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
  import dashboard from 'vue-human/suites/dashboard'
  import assistiveBar from 'vue-human/suites/assistiveBar'
  import searchBar from 'vue-human/suites/searchBar'
  import sideBar from 'vue-human/suites/sideBar'
  import input from 'vue-human/suites/input'
  import menu from './menu'

  export default {
    components: {
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
  .brand {
    padding: 7px 0 0 1rem;
    color: #fff;
    cursor: pointer;
    line-height: 44px;

    .title {
      font-size: 18px;
      padding-left: 1rem;
    }
  }

  .profile-box {
    display: flex;
    align-items: center;
    padding: 1rem;
    cursor: pointer;
    transition-duration: 500ms;
    background: rgba(0, 0, 0, 0.03);
    margin-bottom: 0;

    &:hover {
      background: rgba(0, 0, 0, 0.08);
    }

    &-avator {
      display: block;
      height: 48px;
      margin-right: 1rem;
      border-radius: 0.5rem;
    }

    &-summary {
      line-height: 20px;
    }

    &-title {
      color: #666;
    }

    &-action {
      color: #999;
    }
  }
</style>
