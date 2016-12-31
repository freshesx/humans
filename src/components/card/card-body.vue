<template>
  <div :class="[`${cssPrefix}card-item-body`]">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'mn-card-body',
    computed: {
      cssPrefix () {
        return this.$human.cssPrefix
      }
    }
  }
</script>
