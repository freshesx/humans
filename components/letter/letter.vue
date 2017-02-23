<template>
  <div class="mn-letter">
    <slot></slot>
  </div>
</template>

<script>
  import Element from '../../util/element'

  export default new Element({
    name: 'mn-letter'
  })
</script>

<style lang="scss">
  .mn-letter {
    display: flex;
  }
</style>
