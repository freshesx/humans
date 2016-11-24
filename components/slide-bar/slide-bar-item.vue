<template>
  <div :class="[ `${cssPrefix}slide-bar-item` ]">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    computed: {
      cssPrefix () {
        return this.$human.cssPrefix
      }
    },
    mounted () {
      this.$el.style.maxWidth = this.$parent.maxWidth + 'px'
    }
  }
</script>
