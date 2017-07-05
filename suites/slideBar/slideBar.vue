<template>
  <div class="mn-slide-bar">
    <div class="mn-slide-bar-contents">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import Element from 'vue-human/utils/Element'

  export default new Element({
    name: 'mn-slide-bar'
  })
</script>

<style lang="scss">
  .mn-slide-bar {
    overflow-x: scroll;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      width: 0;
      height: 0;
    }
  }

  .mn-slide-bar-contents {
    display: flex;
    flex-wrap: nowrap;
    align-items: flex-end;
  }
</style>
