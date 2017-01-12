<template>
  <span
    v-html="name"
    :class="[ `${cssPrefix}icon` ]"
    :style="{ width: `${width}px`, height: `${height}px` }"></span>
</template>

<script>
  export default {
    name: 'mn-svg',
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
      }
    },
    computed: {
      cssPrefix () {
        return this.$human.cssPrefix
      }
    }
  }
</script>
