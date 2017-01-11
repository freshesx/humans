<template>
  <div :class="[ `${cssPrefix}letter-action` ]">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'mn-letter-action',
    computed: {
      cssPrefix () {
        return this.$human.cssPrefix
      }
    }
  }
</script>
