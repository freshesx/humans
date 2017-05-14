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
  @import "../../scss/vars";
  @import "../../scss/mixins/media";

  .mn-section-btn {
    padding: 0 $grid-gutters;
    margin-bottom: $grid-gutters / 2;

    @include min-screen(tablet) {
      padding: 0;
    }
  }
</style>
