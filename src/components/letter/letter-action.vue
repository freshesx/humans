<template>
  <div :class="[ `${cssPrefix}letter-action` ]">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'mn-letter-action',
    computed: {
      cssPrefix () {
        return this.$human.cssPrefix
      }
    }
  }
</script>

<style lang="scss">
  @import "../../scss/vars";

  $-letter-action: #{$namespace}letter-action;

  .#{$-letter-action} {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    margin: $grid-gutters;
  }
</style>
