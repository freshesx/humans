<template>
  <i :class="[ `${cssPrefix}tag`, tagType ]">
    <slot></slot>
  </i>
</template>

<script>
  export default {
    computed: {
      cssPrefix () {
        return this.$human.cssPrefix
      },
      tagType () {
        if (this.type) return `is-${this.type}`
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
