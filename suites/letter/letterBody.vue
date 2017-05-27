<template>
  <div class="mn-letter-body">
    <slot></slot>
  </div>
</template>

<script>
  import Element from '../../utils/Element'

  export default new Element({
    name: 'mn-letter-body'
  })
</script>

<style lang="scss">
  @import "./vars"

  .mn-letter-body {
    flex: 1;
    margin: $mn-letter-grid-gutters;
  }
</style>
