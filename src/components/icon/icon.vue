<template>
  <span
    v-html="svg"
    :class="[ `${cssPrefix}icon` ]"
    :style="{ width: `${computedWidth}px`, height: `${computedHeight}px` }"></span>
</template>

<script>
  export default {
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
      }
    },
    computed: {
      cssPrefix () {
        return this.$human.cssPrefix
      },
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
  }
</script>
