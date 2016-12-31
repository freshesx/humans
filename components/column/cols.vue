<template>
  <div :class="[`${cssPrefix}cols`, gaplessClass]">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'mn-cols',
    props: {
      gapless: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      cssPrefix () {
        return this.$human.cssPrefix
      },
      gaplessClass () {
        return { 'is-gapless': this.gapless }
      }
    }
  }
</script>
