<template>
  <div class="mn-modal-action">
    <slot></slot>
  </div>
</template>

<script>
  import Element from '../../utils/Element'

  export default new Element({
    name: 'mn-modal-action'
  })
</script>

<style lang="scss">
  .mn-modal-action {
    border-top: solid 1px #d9d9d9;
    padding: 0.5rem 1rem;
    text-align: right;
  }
</style>
