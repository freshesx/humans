<template>
  <div class="mn-card-group-note">
    <slot></slot>
  </div>
</template>

<script>
  import Element from '../../util/Element'

  export default new Element({
    name: 'mn-card-note',
    created () {
      console && console.warn('不推荐继续使用 mn-card-note，建议换成 mn-section-note。')
    }
  })
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
