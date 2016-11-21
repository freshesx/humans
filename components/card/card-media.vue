<template>
  <div :class="[ `${cssPrefix}card-media` ]">
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
