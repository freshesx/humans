<template>
  <div class="mn-card-group">
    <slot></slot>
  </div>
</template>

<script>
  import Element from '../../util/element'

  export default new Element({
    name: 'mn-card-wrapper',
    created () {
      console && console.warn('不推荐继续使用 mn-card-wrapper，建议换成 mn-section。')
    }
  })
</script>

<style lang="scss">
  @import "../../scss/vars";

  .mn-card-group {
    margin-bottom: $grid-gutters;

    .mn-card {
      margin-bottom: 0;
    }
  }
</style>
