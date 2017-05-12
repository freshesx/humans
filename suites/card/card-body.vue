<template>
  <div class="mn-card-item-body">
    <slot></slot>
  </div>
</template>

<script>
  import Element from '../../utils/Element'

  export default new Element({
    name: 'mn-card-body'
  })
</script>

<style lang="scss">
  .mn-card-item-body {
    flex: 1;
    overflow: hidden;
  }
</style>
