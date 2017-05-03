<template>
  <div class="mn-flexes" :style="[ mediaStyle ]">
    <slot></slot>
  </div>
</template>

<script>
  import Element from '../../util/Element'
  import flexElement from './flex'

  export default new Element({
    name: 'mn-flexes',
    mixins: [ flexElement ]
  })
</script>

<style lang="scss">
  @import "../../scss/vars";

  .mn-flexes {
    display: flex;
    margin: 0 $grid-gutters * -0.5;
    flex-wrap: wrap;
  }
</style>
