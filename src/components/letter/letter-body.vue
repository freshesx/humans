<template>
  <div :class="[ `${cssPrefix}letter-body` ]">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'mn-letter-body',
    computed: {
      cssPrefix () {
        return this.$human.cssPrefix
      }
    }
  }
</script>
