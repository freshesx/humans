<template>
  <div class="scrollbar-wrapper">
    <div class="scrollbar-contents">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {

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
