<template>
  <div :class="[ `${cssPrefix}rows` ]">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'mn-rows',
    computed: {
      cssPrefix () {
        return this.$human.cssPrefix
      }
    }
  }
</script>
