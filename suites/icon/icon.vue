<template>
  <span class="mn-icon" :style="{ width: `${computedWidth}px`, height: `${computedHeight}px` }">
      <span class="mn-icon-svg" v-html="svg" v-if="!loading" :style="{ width: `${width * svgScale}px`, height: `${height * svgScale}px` }"></span>
      <mn-loading-icon v-if="loading"></mn-loading-icon>
    </span>
</template>

<script>
  import Element from '../../utils/Element'
  import loadingIconElement from '../loadingIcon/loadingIcon'

  export default new Element({
    name: 'mn-icon',
    components: {
      ...loadingIconElement.inject()
    },
    props: {
      name: null,
      width: {
        type: Number,
        default: 24
      },
      height: {
        type: Number,
        default: 24
      },
      scale: {
        type: Number,
        default: 1
      },
      svgScale: {
        type: Number,
        default: 1
      },
      vertical: String,
      loading: Boolean
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
    width: 1.5rem;
    height: 1.5rem;
  }

  .mn-icon-svg {
    width: 1.5rem;
    height: 1.5rem;

    > svg {
      vertical-align: top;
    }
  }
</style>
