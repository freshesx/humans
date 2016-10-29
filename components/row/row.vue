<template>
  <div :class="[cssPrefix + 'row', fixedClass]">
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
      },
      fixedClass () {
        return { 'is-fixed': this.fixed }
      }
    }
  }
</script>
