<template>
  <div :class="[ `${cssPrefix}slide-bar-item` ]">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'mn-slide-bar-item',
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
