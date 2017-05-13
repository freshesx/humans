<template>
  <mn-dashboard>
    <mn-dashboard-brand slot="brand" class="brand">
      <mn-icon :name="icons.logo" :width="44"></mn-icon>
    </mn-dashboard-brand>

    <sidebar slot="sidebar"></sidebar>

    <navbar slot="navbar"></navbar>

    <mn-dashboard-body>
      <mn-scroller>
        <div>Mainarea</div>
      </mn-scroller>
    </mn-dashboard-body>
  </mn-dashboard>
</template>

<script>
  import core from 'vue-human/suites/core'
  import dashboard from 'vue-human/suites/dashboard'
  import sidebar from './sidebar'
  import navbar from './navbar'

  export default {
    components: {
      ...core.map(),
      ...dashboard.map(),
      sidebar,
      navbar
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
  }
</style>
