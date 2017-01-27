<template>
  <div :class="[ `${cssPrefix}rows` ]">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'mn-rows',
    computed: {
      cssPrefix () {
        return this.$human.cssPrefix
      }
    }
  }
</script>

<style lang="scss">
  @import "../../scss/vars";

  .#{$namespace}rows {
    display: flex;
    flex-direction: column;
    position: relative;
    height: 100%;
  }
</style>
