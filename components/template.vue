<!-- This is just a component template, copy it to create new component -->

<template>
  <div class="mn-component" :class="{}">
    <slot></slot>
  </div>
</template>

<script>
  import Element from '../../util/Element'

  export default new Element({
    name: 'mn-component'
  })
</script>

<style lang="scss">
  // component scss
</style>
