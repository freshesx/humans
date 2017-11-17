<template>
  <label
    class="mn-label"
    :class="{ 'is-error': isInvalid }">
    <slot></slot>
  </label>
</template>

<script>
  import Element from '../../utils/Element'

  export default new Element({
    name: 'mn-label',
    props: {
      validate: Object
    },
    computed: {
      isInvalid () {
        return this.validate
          ? this.validate.$error
          : false
      }
    }
  })
</script>

<style lang="scss">
  @import "./vars";

  .mn-label {
    display: block;
    width: $mn-label-width;

    &.is-error {
      color: $mn-label-error-color;
    }
  }
</style>
