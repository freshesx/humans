<template>
  <label
    class="mn-label"
    :class="{ 'is-error': isInvalid }">
    <slot></slot>
  </label>
</template>

<script>
  import Element from '../../util/element'

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
  @import "../../scss/vars";

  .mn-label {
    display: block;
    width: 6rem;

    &.is-error {
      color: $pink;
    }
  }
</style>
