<template>
  <div :class="[ `${cssPrefix}card`, { 'is-dark': dark }, { 'is-mobile-narrow': mobile === 'narrow' } ]">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'mn-card',
    props: {
      dark: {
        type: Boolean
      },
      mobile: {
        type: String
      }
    },
    computed: {
      cssPrefix () {
        return this.$human.cssPrefix
      }
    }
  }
</script>
