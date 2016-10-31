<template>
  <div :class="[cssPrefix]">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    computed: {
      cssPrefix () {
        return `${this.$human.cssPrefix}card-media`
      }
    }
  }
</script>
