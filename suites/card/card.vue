<template>
  <div class="mn-card" :class="{ [`is-${theme}`]: !!theme, 'is-rounded': rounded, 'is-backdrop': enableBackdrop }">
    <slot></slot>
  </div>
</template>

<script>
  import Element from '../../utils/Element'

  /**
   * mn-card (卡片组件）
   * @module suites/card/card
   * @param {string} [theme] - 主题的名称，有 “inverse” 或 “glass” 可选
   * @param {boolean} [rounded=false] - 是否强制圆角
   */
  export default new Element({
    name: 'mn-card',
    props: {
      theme: String,
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
  @import "../../scss/mixins/media";
  @import "./vars";

  .mn-card {
    margin-bottom: $mn-card-grid-gutters;
    border-radius: $mn-card-mobile-radius;
    background-color: #fff;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.02);
    overflow: hidden;

    @include screen('mobile') {
      border-radius: 0;
    }

    @include min-screen('desktop') {
      border-radius: $mn-card-desktop-radius;
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
    border-radius: $mn-card-mobile-radius;

    @include min-screen('desktop') {
      border-radius: $mn-card-desktop-radius;
    }
  }
</style>
