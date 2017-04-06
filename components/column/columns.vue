<template>
  <div class="mn-columns" :style="[ mediaStyle ]">
    <slot></slot>
  </div>
</template>

<script>
  import Element from '../../util/Element'
  import Column from './column'

  export default new Element({
    name: 'mn-columns',
    mixins: [ Column ]
  })
</script>

<style lang="scss">
  @import "../../scss/vars";

  .mn-columns {
    display: flex;
    margin: 0 $grid-gutters * -0.5;
    flex-wrap: wrap;

    // &.is-gapless {
    //   margin: 0;
    //
    //   // @affect(./col.vue)
    //   > .mn-column {
    //     padding: 0;
    //   }
    // }
  }
</style>
