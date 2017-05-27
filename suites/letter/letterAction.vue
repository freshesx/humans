<template>
  <div class="mn-letter-action">
    <slot></slot>
  </div>
</template>

<script>
  import Element from '../../utils/Element'

  export default new Element({
    name: 'mn-letter-action'
  })
</script>

<style lang="scss">
  @import "./vars";

  .mn-letter-action {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    margin: $mn-letter-grid-gutters;
  }
</style>
