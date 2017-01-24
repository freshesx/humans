<template>
  <div :class="[ `${cssPrefix}letter-body` ]">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'mn-letter-body',
    computed: {
      cssPrefix () {
        return this.$human.cssPrefix
      }
    }
  }
</script>

<style lang="scss">
  @import "../../scss/vars";
  @import "../../scss/mixins/media";

  $-letter-body: #{$namespace}letter-body;

  .#{$-letter-body} {
    flex: 1;
    margin: $grid-gutters;

    @include screen('mobile') {
      margin-left: 0;
      margin-right: 0;
    }
  }
</style>
