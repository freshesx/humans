<template>
  <span
    v-html="name"
    :class="[ `${cssPrefix}icon` ]"
    :style="{ width: `${computedWidth}px`, height: `${computedHeight}px` }"></span>
</template>

<script>
  export default {
    name: 'mn-icon',
    props: {
      name: {
        type: String,
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
      }
    }
  }
</script>
