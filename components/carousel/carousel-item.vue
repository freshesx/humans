<template>
  <div class="mn-carousel-item" :class="{}">
    <slot></slot>
  </div>
</template>

<script>
  import Element from '../../util/element'

  export default new Element({
    name: 'mn-carousel-item'
  })
</script>

<style lang="scss">
  .mn-carousel-item {
    width: 100%;
    flex-shrink: 0;
  }
</style>
