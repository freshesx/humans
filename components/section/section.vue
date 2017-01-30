<template>
  <div :class="[ `${cssPrefix}section` ]">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'mn-section',
    computed: {
      cssPrefix () {
        return this.$human.cssPrefix
      }
    }
  }
</script>

<style lang="scss">
  @import "../../scss/vars";

  .#{$namespace}section {
    margin: 0 $grid-gutters;
  }
</style>
