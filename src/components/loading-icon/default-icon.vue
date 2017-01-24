<template>
  <span :class="[ `${cssPrefix}loading-icon` ]"></span>
</template>

<script>
  export default {
    computed: {
      cssPrefix () {
        return this.$human.cssPrefix
      }
    }
  }
</script>

<style lang="scss">
  @import "../../sass/vars";

  .#{$namespace}loading-icon {
    @keyframes #{$namespace}loading-icon {
      0% {
        transform: scale(1);
      }

      50% {
        transform: scale(0.6);
      }

      100% {
        transform: scale(1);
      }
    }

    width: 16px;
    height: 16px;
    display: inline-block;
    background: currentColor;
    border-radius: 8px;
    vertical-align: -2px;
    animation: #{$namespace}loading-icon 1.5s infinite linear;
  }
</style>
