<template>
  <transition name="mn-popup-mask-fade">
    <div class="mn-popup-mask" v-if="show" :style="{ 'z-index': zIndex }" @click="close"></div>
  </transition>
</template>

<script>
  import Element from '../../util/Element'

  export default new Element({
    methods: {
      close () {
        this.$emit('close')
      }
    },
    data () {
      return {
        zIndex: 2000,
        show: false
      }
    }
  })
</script>

<style lang="scss">
  @import "../../scss/vars";

  .mn-popup-mask {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: #000;
    opacity: 0.4;
    z-index: 1000;

    // Fade in
    &-fade-enter-active,
    &-fade-leave-active {
      transition: opacity 0.3s linear;
    }

    &-fade-enter,
    &-fade-leave-active {
      opacity: 0;
    }
  }
</style>
