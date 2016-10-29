<template>
  <div :class="[cssPrefix + 'cols']">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    computed: {
      cssPrefix () {
        return `${this.$human.cssPrefix}`
      }
    }
  }
</script>
