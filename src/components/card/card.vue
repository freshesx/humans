<template>
  <div :class="[ `${cssPrefix}card`, { [`is-${type}`]: true, 'is-none-mobile-narrow': isNoneMobileNarrow } ]">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'mn-card',
    props: {
      // primary, inverse
      type: {
        type: String,
        default: 'primary'
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
