<template>
  <div :class="[`${cssPrefix}cols`, gaplessClass]">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'mn-cols',
    props: {
      gapless: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      cssPrefix () {
        return this.$human.cssPrefix
      },
      gaplessClass () {
        return { 'is-gapless': this.gapless }
      }
    }
  }
</script>

<style lang="scss">
  @import "../../scss/vars";

  .#{$namespace}cols {
    display: flex;
    margin: 0 $grid-gutters * -0.5;
    flex-wrap: wrap;

    &.is-gapless {
      margin: 0;

      > .#{$namespace}col {
        padding: 0;
      }
    }
  }
</style>
