<template>
  <mn-dashboard>
    <mn-dashboard-brand slot="brand" class="brand"
      @click.native="$router.push({ name: 'homepage' })">
      <mn-icon :name="icons.logo" :width="44"></mn-icon>
    </mn-dashboard-brand>

    <sidebar slot="sidebar"></sidebar>

    <breadcrumb slot="navbar"></breadcrumb>

    <mn-dashboard-body>
      <slot>
        <router-view></router-view>
      </slot>
    </mn-dashboard-body>
  </mn-dashboard>
</template>

<script>
  import core from 'vue-human/suites/core'
  import dashboard from 'vue-human/suites/dashboard'
  import sidebar from './sidebar'
  import navbar from './navbar'
  import breadcrumb from './breadcrumb'

  export default {
    components: {
      ...core.map(),
      ...dashboard.map(),
      sidebar,
      navbar,
      breadcrumb
    },
    data () {
      return {
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
  }
</style>
