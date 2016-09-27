<template>
  <div class="scrollbar-wrapper" :class="{ 'is-save': save }">
    <div class="scrollbar-contents">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      save: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style lang="scss">
  .scrollbar-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
  }
</style>
