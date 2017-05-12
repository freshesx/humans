<template>
  <div class="mn-rows">
    <slot></slot>
  </div>
</template>

<script>
  import Element from '../../utils/Element'

  export default new Element({
    name: 'mn-rows'
  })
</script>

<style lang="scss">
  .mn-rows {
    display: flex;
    flex-direction: column;
    position: relative;
    height: 100%;
  }
</style>
