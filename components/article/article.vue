<template>
  <div :class="[ `${cssPrefix}article` ]">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'mn-article',
    computed: {
      cssPrefix () {
        return this.$human.cssPrefix
      }
    }
  }
</script>
