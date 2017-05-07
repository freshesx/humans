<template>
  <div class="mn-column" :style="[ computedStyle, sideStyle ]">
    <slot></slot>
  </div>
</template>

<script>
  import Element from '../../util/Element'
  import media from './media'
  import isUndefined from 'lodash/isUndefined'
  import isString from 'lodash/isString'

  export default new Element({
    name: 'mn-column',
    mixins: [ media ],
    data () {
      return {
        leftNoneSpan: false,
        rightNoneSpan: false
      }
    },
    computed: {
      current () {
        // Return default span
        if (isUndefined(this.adaptedMedia)) {
          return { span: 12 }
        }

        const adaptedMedia = this.adaptedMedia

        if (isString(adaptedMedia)) {
          return {
            span: parseInt(adaptedMedia)
          }
        }
      },
      currentSpan () {
        return this.current.span
      },
      computedStyle () {
        const current = this.current
        return {
          flex: 'none',
          width: `${(100 / 12) * current.span}%`
        }
      },
      sideStyle () {
        const style = {}

        if (this.leftNoneSpan) style['padding-left'] = 0
        if (this.rightNoneSpan) style['padding-right'] = 0

        return style
      }
    }
  })
</script>

<style lang="scss">
  @import "../../scss/vars";

  .mn-column {
    width: 100%;
    padding: 0 $grid-gutters * 0.5;
  }
</style>
