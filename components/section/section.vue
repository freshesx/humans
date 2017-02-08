<template>
  <section class="mn-section">
    <slot></slot>
  </section>
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
