<template>
  <div class="mn-letter-action">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'mn-letter-action'
  }
</script>

<style lang="scss">
  @import "../../scss/vars";

  .mn-letter-action {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    margin: $grid-gutters;
  }
</style>
