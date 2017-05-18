<template>
  <mn-dashboard-breadcrumb></mn-dashboard-breadcrumb>
</template>

<script>
  import core from 'vue-human/suites/core'
  import dashboard from 'vue-human/suites/dashboard'

  export default {
    components: {
      ...core.map(),
      ...dashboard.map()
    }
  }
</script>
