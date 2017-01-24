<template>
  <div :class="[ `${cssPrefix}card-group` ]">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'mn-card-wrapper',
    computed: {
      cssPrefix () {
        return this.$human.cssPrefix
      }
    }
  }
</script>

<style lang="scss">
  @import "../../sass/variables";

  .mn-card-group {
    margin-bottom: $grid-gutters;

    .mn-card {
      margin-bottom: 0;
    }
  }
</style>
