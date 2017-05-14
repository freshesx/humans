<template>
  <div class="mn-dashboard-brand">
    <slot></slot>
  </div>
</template>

<script>
  import Element from 'vue-human/utils/Element'

  export default new Element({
    name: 'mn-dashboard-brand'
  })
</script>

<style lang="scss">
  @import "./theme";

  .mn-dashboard-brand {
    width: $-dashboard-sidebar-width;
    flex-shrink: 0;
  }
</style>
