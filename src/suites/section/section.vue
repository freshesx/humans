<template>
  <section class="mn-section">
    <slot></slot>
  </section>
</template>

<script>
  import Element from '../../utils/Element'

  export default new Element({
    name: 'mn-section'
  })
</script>

<style lang="scss">
  @import "./vars";

  .mn-section {
    margin-bottom: $mn-section-grid-gutters;
  }
</style>
