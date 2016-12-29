<template>
  <label :class="[ `${cssPrefix}form-label`, { 'is-error': isInvalid } ]">
    <slot></slot>
  </label>
</template>

<script>
  export default {
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
