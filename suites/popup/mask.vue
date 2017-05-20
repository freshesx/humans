<template>
  <transition name="mn-popup-mask-fade">
    <div class="mn-popup-mask"
      v-if="isShow"
      :style="{ 'z-index': zIndex }"
      @click="onCloseMask"></div>
  </transition>
</template>

<script>
  import Element from '../../utils/Element'
  import popupMixin from './popupMixin'

  export default new Element({
    mixins: [
      /**
       * Add isShow, close(), show() mixins
       */
      popupMixin
    ],
    props: {
      zIndex: {
        type: Number,
        default: 2000
      }
    },
    methods: {
      /**
       * Mask want to close itself, and notify the parent compoennt to handle,
       * PS: just notify parent component, don't close by itself.
       *
       * @return {void}
       */
      onCloseMask () {
        this.$emit('notifyCloseMask')
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
