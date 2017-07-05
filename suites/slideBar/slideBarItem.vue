<template>
  <div class="mn-slide-bar-item"
    :style="{ width: `${width}px`, height: `${height}px` }">
    <slot></slot>
  </div>
</template>

<script>
  import Element from 'vue-human/utils/Element'

  export default new Element({
    name: 'mn-slide-bar-item',
    props: {
      mobile: {
        type: String
      }
    },
    computed: {
      width () {
        return parseInt(this.mobile.split(/,\s*/)[0])
      },
      height () {
        return parseInt(this.mobile.split(/,\s*/)[1])
      }
    }
  })
</script>

<style lang="scss">
  .mn-slide-bar-item {
    overflow: hidden;
  }
</style>
