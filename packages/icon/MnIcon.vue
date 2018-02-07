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
import MnLoadingIcon from '../loading-icon/MnLoadingIcon.vue'

/**
 * Icon component
 */
export default {
  name: 'MnIcon',
  components: {
    MnLoadingIcon
  },
  props: {
    /**
     * Some svg string, You can use @freshes/icons or your custom svg string.
     * @see https://www.npmjs.com/package/@freshes/icons
     */
    name: [Object, String],
    /**
     * Icon width
     */
    width: {
      type: Number,
      default: 24
    },
    /**
     * Icon height
     */
    height: {
      type: Number,
      default: 24
    },
    /**
     * If change scale, you can change line-height as same.
     */
    scale: {
      type: Number,
      default: 1
    },
    /**
     * Switch to loading icon
     */
    loading: Boolean
  },
  computed: {
    svg () {
      // for svg string
      if (typeof this.name === 'string') {
        return this.name
      }

      // for commonjs require, e.g. require('@freshes/icons/icon')
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
