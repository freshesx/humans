<template>
  <div class="mn-card-group">
    <slot></slot>
  </div>
</template>

<script>
  import Element from '../../util/element'

  export default new Element({
    name: 'mn-card-wrapper'
  })
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
