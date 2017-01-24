<template>
  <div :class="[ `${cssPrefix}letter` ]">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'mn-letter',
    computed: {
      cssPrefix () {
        return this.$human.cssPrefix
      }
    }
  }
</script>

<style lang="scss">
  @import "../../sass/variables";

  $-letter: #{$namespace}letter;

  .#{$-letter} {
    display: flex;
  }
</style>
