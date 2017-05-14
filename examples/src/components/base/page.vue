<template>
  <mn-page>
    <mn-scroller>
      <mn-dashboard-container>
        <slot></slot>
      </mn-dashboard-container>
    </mn-scroller>
  </mn-page>
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
