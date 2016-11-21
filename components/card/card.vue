<template>
  <div :class="[ `${cssPrefix}card` ]">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    computed: {
      cssPrefix () {
        return this.$human.cssPrefix
      }
    }
  }
</script>
