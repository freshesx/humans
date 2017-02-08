<template>
  <div class="mn-card-group-note">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'mn-card-note'
  }
</script>

<style lang="scss">
  @import "../../scss/vars";
  @import "../../scss/mixins/media";

  .mn-card-group-note {
    color: #666;
    font-size: 0.875rem;
    padding-left: $grid-gutters;
    margin-bottom: $grid-gutters / 2;

    @include screen('mobile') {
      margin-left: $grid-gutters * -1;
      margin-right: $grid-gutters * -1;
    }
  }

  .mn-card + .mn-card-group-note {
    margin-top: $grid-gutters / 2;
    margin-bottom: 0;
  }
</style>
