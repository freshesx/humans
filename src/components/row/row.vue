<template>
  <div :class="[ `${cssPrefix}row`, { 'is-fixed': fixed, 'is-visible': visible } ]">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'mn-row',
    props: {
      fixed: {
        type: Boolean,
        default: false
      },
      visible: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      cssPrefix () {
        return this.$human.cssPrefix
      }
    }
  }
</script>
