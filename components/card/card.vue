<template>
  <div
    class="mn-card"
    :class="{
      [`is-${type}`]: true,
      'is-none-mobile-narrow': isNoneMobileNarrow
    }">
    <slot></slot>
  </div>
</template>

<script>
  import Element from '../../util/element'

  export default new Element({
    name: 'mn-card',
    props: {
      // primary, inverse
      type: {
        type: String,
        default: 'primary'
      }
    },
    data () {
      return {
        isNoneMobileNarrow: false
      }
    }
  })
</script>

<style lang="scss">
  @import "../../scss/vars";
  @import "../../scss/mixins/media";

  .mn-card {
    margin-bottom: $grid-gutters;
    border-radius: $base-radius;
    background-color: #fff;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.02);
    overflow: hidden;

    @include screen('mobile') {
      border-radius: 0;
    }

    &.is-none-mobile-narrow {
      @include screen('mobile') {
        margin-left: 0;
        margin-right: 0;
        border-radius: $base-radius;
      }
    }

    // &.is-light {
    //   background-color: rgba(255, 255, 255, 0.75);
    // }

    // &.is-primary {}

    &.is-inverse {
      background-color: #333;
      color: #fff;
    }
  }
</style>
