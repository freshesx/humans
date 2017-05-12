<template>
  <span
    v-html="svg"
    class="mn-icon"
    :style="{ width: `${computedWidth}px`, height: `${computedHeight}px`, 'vertical-align': vertical }"></span>
</template>

<script>
  import Element from '../../utils/Element'

  export default new Element({
    name: 'mn-icon',
    props: {
      name: {
        type: [String, Object],
        required: true
      },
      width: {
        type: Number,
        default: 20
      },
      height: {
        type: Number,
        default: 20
      },
      scale: {
        type: Number,
        default: 1
      },
      vertical: String
    },
    computed: {
      computedWidth () {
        return this.width * this.scale
      },
      computedHeight () {
        return this.height * this.scale
      },
      svg () {
        if (typeof this.name === 'string') {
          return this.name
        } else if (typeof this.name === 'object' && this.name.default) {
          return this.name.default
        } else {
          return '<svg viewBox="0 0 0 0"></svg>'
        }
      }
    }
  })
</script>

<style lang="scss">
  @import "../../scss/vars";

  .mn-icon {
    display: inline-block;
    fill: currentColor;
    vertical-align: baseline;

    > svg {
      vertical-align: top;
    }
  }
</style>
