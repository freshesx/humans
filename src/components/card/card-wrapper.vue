<template>
  <div :class="[ `${cssPrefix}card-group` ]">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'mn-card-wrapper',
    computed: {
      cssPrefix () {
        return this.$human.cssPrefix
      }
    }
  }
</script>
