<template>
  <section class="mn-section">
    <slot></slot>
  </section>
</template>

<script>
  import Element from '../../util/Element'

  export default new Element({
    name: 'mn-section'
  })
</script>

<style lang="scss">
  @import "../../scss/vars";

  .mn-section {
    margin: 0 $grid-gutters;
    margin-bottom: $grid-gutters;
  }
</style>
