<template>
  <label :class="[ `${cssPrefix}form-label`, { 'is-error': isInvalid } ]">
    <slot></slot>
  </label>
</template>

<script>
  export default {
    props: {
      validate: Array
    },
    computed: {
      cssPrefix () {
        return this.$human.cssPrefix
      },
      isInvalid () {
        return this.validate && this.validate.length > 0
      }
    }
  }
</script>
