<template>
  <span class="mn-icon" :style="{
    width: width * scale + 'px',
    height: height * scale + 'px'
  }">
    <span class="mn-icon-svg" v-html="svg" v-if="!loading" :style="{
      width: width * scale + 'px',
      height: height * scale + 'px'
    }"></span>
    <mn-loading-icon v-if="loading"></mn-loading-icon>
  </span>
</template>

<script>
  import loadingIcon from '@freshes/loadingIcon'

  /**
   * @param {String}   [name]             - Some svg string, You can use vue-human-icons or your custom svg string. @see {@link https://www.npmjs.com/package/vue-human-icons}.
   * @param {Number}   [width=24]         - Icon width
   * @param {Number}   [height=24]        - Icon height
   * @param {Number}   [scale=1]          - If change scale, you can change line-height as same.
   * @param {Boolean}  [loading=false]    - Switch to loading icon
   */
  export default {
    name: 'mn-icon',
    components: Object.assign({}, loadingIcon.map()),
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
      loading: Boolean
    },
    computed: {
      svg () {
        // for svg string
        if (typeof this.name === 'string') {
          return this.name
        }

        // for commonjs require, e.g. require('vue-human-icons/icon')
        if (typeof this.name === 'object' &&
          this.name.hasOwnProperty('default')) {
          return this.name.default
        }

        // default svg
        return '<svg viewBox="0 0 0 0"></svg>'
      }
    }
  }
</script>
