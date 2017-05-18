<template>
  <div class="mn-card" :class="[ `is-${theme}`, { 'is-rounded': rounded, 'is-backdrop': enableBackdrop } ]">
    <slot></slot>
  </div>
</template>

<script>
  import Element from '../../utils/Element'

  export default new Element({
    name: 'mn-card',
    props: {
      /**
       * Card theme
       */
      theme: {
        type: String,
        default: 'primary'
      },

      rounded: Boolean
    },
    data () {
      return {
        enableBackdrop: false
      }
    },
    mounted () {
      if (this.$el && this.$el.style && this.$el.style.hasOwnProperty('webkitBackdropFilter')) {
        this.enableBackdrop = true
      }
    }
  })
</script>

<style lang="scss">
  @import "../../scss/vars";
  @import "../../scss/mixins/media";

  $-card-mobile-radius: $card-mobile-radius;
  $-card-desktop-radius: $card-desktop-radius;

  .mn-card {
    margin-bottom: $grid-gutters;
    border-radius: $-card-mobile-radius;
    background-color: #fff;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.02);
    overflow: hidden;

    @include screen('mobile') {
      border-radius: 0;
    }

    @include min-screen('desktop') {
      border-radius: $-card-desktop-radius;
    }

    &.is-inverse {
      background-color: #333;
      color: #fff;
    }

    &.is-glass.is-backdrop {
      background: rgba(255, 255, 255, 0.8);
      -webkit-backdrop-filter: blur(20px);
    }
  }

  .mn-card.is-rounded {
    border-radius: $card-mobile-radius;

    @include min-screen('desktop') {
      border-radius: $-card-desktop-radius;
    }
  }
</style>
