<template>
  <i :class="[ `${cssPrefix}tag`, hasName ]">
    <slot></slot>
  </i>
</template>

<script>
  export default {
    name: 'mn-tag',
    computed: {
      cssPrefix () {
        return this.$human.cssPrefix
      },
      hasName () {
        if (this.name) return `is-${this.name}`
      }
    },
    props: {
      // is-red, is-green, is-pink etc.
      name: {
        type: String
      }
    }
  }
</script>
