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
  @import "../../scss/mixins/media";
  @import "./vars";

  .mn-section-note {
    color: #666;
    font-size: 0.875rem;
    padding-left: $mn-section-grid-gutters;
    padding-right: $mn-section-grid-gutters;
    margin-bottom: $mn-section-grid-gutters / 2;
  }
</style>
