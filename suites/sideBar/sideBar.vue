<template>
  <div class="mn-side-bar" :class="{ 'is-active': show }">
    <slot></slot>
  </div>
</template>

<script>
  import Element from '../../utils/Element'
  import Shade from '../../utils/Shade'

  export default new Element({
    name: 'mn-side-bar',
    props: {
      show: Boolean
    },
    watch: {
      show (newVal) {
        if (newVal) {
          this.shadeLayer = Shade.create({
            zIndex: 190
          }).show().on('update:visible', visible => {
            if (!visible) this.hide()
          })
        } else {
          if (this.shadeLayer) this.shadeLayer.destroy()
        }
      },
      '$route.path' () {
        this.hide()
      }
    },
    methods: {
      hide () {
        this.$emit('update:show', false)
        return this
      }
    }
  })
</script>

<style lang="scss">
  @import "./vars";
  @import "../../scss/mixins/media";

  .mn-side-bar {
    background: #fff;
    position: absolute;
    top: 100px;
    left: 0.5rem;
    right: 0.5rem;
    bottom: 1rem;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
    border-radius: $mn-side-bar-mobile-radius;
    z-index: 200;
    transform: translateY(120%);
    transition-duration: 500ms;

    &.is-active {
      transform: translateY(0);
      transition-duration: 500ms;
    }

    @include min-screen(tablet) {
      top: 500px;
      left: 6rem;
      right: 6rem;
      bottom: 1rem;
    }

    @include min-screen(desktop) {
      position: relative;
      width: $mn-side-bar-width;
      box-shadow: none;
      border-radius: 0;
      top: 0;
      left: 0;
      transition-duration: 0;
      transform: translateY(0);
    }
  }
</style>
