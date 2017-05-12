<template>
  <div class="mn-dashboard-menu" :class="{}">
    <slot></slot>
  </div>
</template>

<script>
  import Element from '../../utils/Element'

  export default new Element({
    name: 'mn-dashboard-menu'
  })
</script>

<style lang="scss">
  // component scss
</style>
