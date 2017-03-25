<template>
  <div class="mn-cols" :class="{ 'is-gapless': gapless }">
    <slot></slot>
  </div>
</template>

<script>
  import Element from '../../util/element'

  export default new Element({
    name: 'mn-cols',
    props: {
      gapless: {
        type: Boolean,
        default: false
      }
    },
    created () {
      console && console.warn('建议使用全新 MnColumns 组件取代 MnCols。')
    }
  })
</script>

<style lang="scss">
  @import "../../scss/vars";

  .mn-cols {
    display: flex;
    margin: 0 $grid-gutters * -0.5;
    flex-wrap: wrap;

    &.is-gapless {
      margin: 0;

      // @affect(./col.vue)
      > .mn-col {
        padding: 0;
      }
    }
  }
</style>
