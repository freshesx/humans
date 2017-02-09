<template>
  <div class="mn-card-group">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'mn-card-wrapper'
  }
</script>

<style lang="scss">
  @import "../../scss/vars";

  .mn-card-group {
    margin-bottom: $grid-gutters;

    .mn-card {
      margin-bottom: 0;
    }
  }
</style>
