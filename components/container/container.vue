<template>
  <div :class="[ `${cssPrefix}container` ]">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'mn-container',
    computed: {
      cssPrefix () {
        return this.$human.cssPrefix
      }
    }
  }
</script>
