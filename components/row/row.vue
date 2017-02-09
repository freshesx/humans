<template>
  <div
    class="mn-row"
    :class="{ 'is-fixed': fixed, 'is-visible': visible }">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'mn-row',
    props: {
      fixed: {
        type: Boolean,
        default: false
      },
      visible: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style lang="scss">
  .mn-row {
    position: relative;
    flex: 1 1;
    height: 100%;
    overflow: hidden;

    &.is-fixed {
      flex: none;
      flex-shrink: 0;
      height: auto;
    }

    &.is-visible {
      overflow: visible;
    }
  }
</style>
