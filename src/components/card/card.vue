<template>
  <div :class="[ `${cssPrefix}card` ]">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'mn-card',
    computed: {
      cssPrefix () {
        return this.$human.cssPrefix
      }
    }
  }
</script>
