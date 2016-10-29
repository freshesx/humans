<template>
  <div :class="[cssPrefix + 'row', { 'is-fixed': fixed }]">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      fixed: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      cssPrefix () {
        return `${this.$human.cssPrefix}`
      }
    }
  }
</script>
