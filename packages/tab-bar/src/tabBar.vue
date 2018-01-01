<template>
  <div class="mn-tab-bar">
    <div class="mn-tab-bar-items">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'mn-tab-bar',
    computed: {
      childrenLength () {
        let items = this.$slots.default.filter(item =>
          item.tag && item.tag.includes('mn-tab-bar-item'))
        return items.length
      }
    }
  }
</script>
