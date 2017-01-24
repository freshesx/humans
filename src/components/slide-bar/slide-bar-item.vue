<template>
  <div :class="[ `${cssPrefix}slide-bar-item` ]">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'mn-slide-bar-item',
    computed: {
      cssPrefix () {
        return this.$human.cssPrefix
      }
    },
    mounted () {
      this.$el.style.maxWidth = this.$parent.maxWidth + 'px'
    }
  }
</script>

<style lang="scss">
  @import "../../sass/vars";

  .#{$namespace}slide-bar-item {
    flex: 0 0 auto;
    flex-wrap: nowrap;
    padding: 0 0.5rem;

    // @affect(./slide-bar.vue)
    .#{$namespace}slide-bar.is-full & {
      flex: 0 0 100%;
    }
  }
</style>
