<template>
  <div class="mn-section-note">
    <slot></slot>
  </div>
</template>

<script>
  import Element from '../../util/Element'

  export default new Element({
    name: 'mn-section-note'
  })
</script>

<style lang="scss">
  @import "../../scss/vars";
  @import "../../scss/mixins/media";

  .mn-section-note {
    color: #666;
    font-size: 0.875rem;
    padding-left: $grid-gutters;
    margin-bottom: $grid-gutters / 2;

    @include screen('mobile') {
      margin-left: $grid-gutters * -1;
      margin-right: $grid-gutters * -1;
    }
  }
</style>
