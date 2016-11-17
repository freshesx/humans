<template>
  <i :class="[ `${cssPrefix}tag`, `is-${this.type}` ]">
    <slot></slot>
  </i>
</template>

<script>
  export default {
    computed: {
      cssPrefix () {
        return this.$human.cssPrefix
      }
    },
    props: {
      // is-primary, is-secondary, is-error etc.
      type: {
        type: String
      }
    }
  }
</script>
