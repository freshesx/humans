<template>
  <div class="mn-dashboard-body">
    <slot></slot>
  </div>
</template>

<script>
  import Element from '../../utils/Element'

  export default new Element({
    name: 'mn-dashboard-body'
  })
</script>

<style lang="scss">
  .mn-dashboard-body {
    position: relative;
    flex: 1;
  }
</style>
