<template>
  <span :class="[ `${cssPrefix}loading-icon` ]"></span>
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
