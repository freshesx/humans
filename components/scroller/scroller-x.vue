<template>
  <div
    :class="[`${cssPrefix}scroller`, { 'is-x': true }, { 'is-bar': scrollbar }]">
    <div :class="[ `${cssPrefix}scroller-contents` ]">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'mn-scroller-x',
    props: {
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
