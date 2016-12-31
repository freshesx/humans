<template>
  <div :class="[`${cssPrefix}card-item-action`]">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'mn-card-action',
    computed: {
      cssPrefix () {
        return this.$human.cssPrefix
      }
    }
  }
</script>
