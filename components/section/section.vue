<template>
  <div class="mn-section">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'mn-section'
  }
</script>

<style lang="scss">
  @import "../../scss/vars";

  .mn-section {
    margin: 0 $grid-gutters;
  }
</style>
