<template>
  <div :class="[ `${cssPrefix}card`, { 'is-dark': dark } ]">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'mn-card',
    props: {
      dark: {
        type: Boolean
      }
    },
    computed: {
      cssPrefix () {
        return this.$human.cssPrefix
      }
    }
  }
</script>
