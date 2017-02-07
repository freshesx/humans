<template>
  <div class="mn-cols" :class="{ 'is-gapless': gapless }">
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
    }
  }
</script>

<style lang="scss">
  @import "../../scss/vars";

  .mn-cols {
    display: flex;
    margin: 0 $grid-gutters * -0.5;
    flex-wrap: wrap;

    &.is-gapless {
      margin: 0;

      // @affect(./col.vue)
      > .mn-col {
        padding: 0;
      }
    }
  }
</style>
