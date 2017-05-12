<template>
  <div class="mn-slide-bar-item">
    <slot></slot>
  </div>
</template>

<script>
  import Element from '../../utils/Element'

  export default new Element({
    name: 'mn-slide-bar-item',
    mounted () {
      this.$el.style.maxWidth = this.$parent.maxWidth + 'px'
    }
  })
</script>

<style lang="scss">
  .mn-slide-bar-item {
    flex: 0 0 auto;
    flex-wrap: nowrap;
    padding: 0 0.5rem;

    // @affect(./slideBar.vue)
    .mn-slide-bar-contents.is-full & {
      flex: 0 0 100%;
    }
  }
</style>
