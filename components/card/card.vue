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

  $card-base-radius: $base-radius;
  $card-desktop-radius: 4px;

  .mn-card {
    margin-bottom: $grid-gutters;
    border-radius: $card-base-radius;
    background-color: #fff;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.02);
    overflow: hidden;

    @include screen('mobile') {
      margin-left: $grid-gutters * -1;
      margin-right: $grid-gutters * -1;
      border-radius: 0;
    }

    @include min-screen('desktop') {
      border-radius: $card-desktop-radius;
    }

    &.is-none-mobile-narrow {
      @include screen('mobile') {
        margin-left: 0;
        margin-right: 0;
        border-radius: $card-base-radius;
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
