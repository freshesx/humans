<template>
  <div class="mn-tab-bar">
    <div class="mn-tab-bar-items">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import Element from '../../utils/Element'

  export default new Element({
    name: 'mn-tab-bar',
    computed: {
      childrenLength () {
        let items = this.$slots.default.filter(item =>
          item.tag && item.tag.includes('mn-tab-bar-item'))
        return items.length
      }
    }
  })
</script>

<style lang="scss">
  .mn-tab-bar {
    display: flex;
    background: #fafafa;
    height: 3rem;
    white-space: nowrap;
    justify-content: center;
  }

  .mn-tab-bar-items {
    display: flex;
    flex: 1;
    max-width: 400px;
  }
</style>
