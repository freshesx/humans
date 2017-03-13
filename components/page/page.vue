<template>
  <transition name="has-slide">
    <slot></slot>
  </transition>
</template>

<script>
  import Element from '../../util/element'

  export default new Element({
    name: 'mn-page'
  })
</script>

<style lang="scss">
  .has-slide-enter {
    transform: translateX(50%);
  }

  .has-slide-enter-active {
    transition: transform 0.2s;
  }
</style>
