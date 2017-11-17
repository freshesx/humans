<template>
  <div class="mn-section-btn">
    <slot></slot>
  </div>
</template>

<script>
  import Element from '../../utils/Element'

  export default new Element({
    name: 'mn-section-btn'
  })
</script>

<style lang="scss">
  @import "../../scss/mixins/media";
  @import "./vars";

  .mn-section-btn {
    padding: 0 $mn-section-grid-gutters;
    margin-bottom: $mn-section-grid-gutters / 2;

    @include min-screen(tablet) {
      padding: 0;
    }
  }
</style>
