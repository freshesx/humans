<template>
  <transition name="mn-popup-mask-fade">
    <div class="mn-popup-mask" v-if="show" :style="{ 'z-index': zIndex }" @click="onCloseMask"></div>
  </transition>
</template>

<script>
  import Element from '../../util/Element'
  import Vue from 'vue'

  export default new Element({
    methods: {
      onCloseMask () {
        this.$emit('closeMask')
      },
      closeAndDestroy () {
        this.show = false
        document.body.removeChild(this.$el)
        this.$destroy()
      },
      appendToBody () {
        document.body.appendChild(this.$el)
        return this
      }
    },
    data () {
      return {
        zIndex: 2000,
        show: false
      }
    },
    create () {
      const el = document.createElement('div')
      const MaskComponent = Vue.extend(this)
      return new MaskComponent({ el })
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
