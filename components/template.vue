<!-- This is just a component template, copy it to create new component -->

<template>
  <div class="mn-component" :class="{}">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'mn-component'
  }
</script>

<style lang="scss">
  // component scss
</style>
