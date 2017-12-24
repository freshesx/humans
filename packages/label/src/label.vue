<template>
  <label
    class="mn-label"
    :class="{ 'is-error': isInvalid }">
    <slot></slot>
  </label>
</template>

<script>
  export default {
    name: 'mn-label',
    props: {
      validate: Object
    },
    computed: {
      isInvalid () {
        return this.validate ? this.validate.$error : false
      }
    }
  }
</script>
