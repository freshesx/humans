<template>
  <div
    :class="[`${cssPrefix}scroller-x`, { 'has-scrollbar': scrollbar }]">
    <div :class="[ `${cssPrefix}scroller-contents` ]">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'mn-scroller-x',
    props: {
      save: {
        type: Boolean,
        default: false
      },
      scrollbar: {
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
