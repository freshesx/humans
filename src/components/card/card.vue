<template>
  <div :class="[ `${cssPrefix}card`, { 'is-dark': dark, 'is-none-mobile-narrow': isNoneMobileNarrow } ]">
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
    },
    data () {
      return {
        isNoneMobileNarrow: false
      }
    }
  }
</script>
