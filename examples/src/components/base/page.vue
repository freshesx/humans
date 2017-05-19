<template>
  <mn-page>
    <mn-scroller>
      <mn-container fluid>
        <slot></slot>
      </mn-container>
    </mn-scroller>
  </mn-page>
</template>

<script>
  import core from 'vue-human/suites/core'

  export default {
    components: {
      ...core.map()
    }
  }
</script>
