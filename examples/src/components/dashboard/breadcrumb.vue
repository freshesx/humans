<template>
  <mn-dashboard-breadcrumb :show.sync="storage.showSidebar"></mn-dashboard-breadcrumb>
</template>

<script>
  import core from 'vue-human/suites/core'
  import dashboard from 'vue-human/suites/dashboard'
  import storage from './storage'

  export default {
    components: {
      ...core.map(),
      ...dashboard.map()
    },
    data () {
      return {
        storage
      }
    }
  }
</script>
