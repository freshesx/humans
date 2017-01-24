<template>
  <label :class="[ `${cssPrefix}form-label`, { 'is-error': isInvalid } ]">
    <slot></slot>
  </label>
</template>

<script>
  export default {
    name: 'mn-label',
    props: {
      validate: Object
    },
    computed: {
      cssPrefix () {
        return this.$human.cssPrefix
      },
      isInvalid () {
        return this.validate
          ? this.validate.$error
          : false
      }
    }
  }
</script>

<style lang="scss">
  @import "../../scss/vars";

  .#{$namespace}form-label {
    display: block;
    width: 6rem;

    &.is-error {
      color: $pink;
    }
  }
</style>
