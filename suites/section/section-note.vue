<template>
  <div class="mn-section-note">
    <slot></slot>
  </div>
</template>

<script>
  import Element from '../../utils/Element'

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
  }
</style>
