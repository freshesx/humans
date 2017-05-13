<template>
  <transition :name="transition">
    <div class="mn-popup" :style="{ 'z-index': this.zIndex }" v-if="show">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
  import Element from '../../utils/Element'
  import maskManager from '../popup/maskManager'
  import ANIMATIONS from './animations'
  import { getZIndex } from './layer'

  export default new Element({
    name: 'mn-popup',
    mixins: [ maskManager ],
    props: {
      /**
       * Popup show prop
       */
      show: Boolean,

      /**
       * Popup z-index
       */
      zIndex: {
        type: Number,
        default: () => getZIndex()
      },

      /**
       * Which transition
       */
      animation: {
        type: String,
        default: 'fadeIn',
        validator: val => {
          const animations = Object.keys(ANIMATIONS)
          const valid = animations.includes(val)
          if (!valid) {
            console.warn(`
              Only support ${Object.keys(ANIMATIONS)}, and you use '${val}'
            `)
          }
          return valid
        }
      }
    },
    methods: {
      /**
       * When mask notify this component to close,
       * this component notify the parent component to close itself,
       * and this component watch `isShow`, when isShow is false,
       * close this component and mask component.
       *
       * @return {this}
       */
      closePopup () {
        this.$emit('close')
        return this
      }
    },
    watch: {
      /**
       * Listen isShow. When isShow is true, excute to show mask.
       * When isShow is false, excute to close mask.
       * Mask's z-index less than this component's z-index.
       *
       * @param {Boolean} newVal
       * @return {void}
       */
      show (newVal) {
        if (newVal) {
          this.showMask(this.zIndex - 1)
        } else {
          this.closeMask()
        }
      }
    },
    computed: {
      /**
       * Transition map
       *
       * @return {String}
       */
      transition () {
        return ANIMATIONS[this.animation]
      }
    }
  })
</script>

<style lang="scss">
  @import "../../scss/vars";

  .mn-popup {
    position: fixed;

    // fadeIn
    &-fade-in-enter-active,
    &-fade-in-leave-active {
      transition: opacity 0.3s linear;
    }

    &-fade-in-enter,
    &-fade-in-leave-active {
      opacity: 0;
    }

    // slideInBottom
    &-slide-in-bottom-enter-active,
    &-slide-in-bottom-leave-active {
      transition: transform 0.3s;
    }

    &-slide-in-bottom-enter,
    &-slide-in-bottom-leave-active {
      transform: translateY(100%);
    }

    // slideInTop
    &-slide-in-top-enter-active,
    &-slide-in-top-leave-active {
      transition: transform 0.3s;
    }

    &-slide-in-top-enter,
    &-slide-in-top-leave-active {
      transform: translateY(-100%);
    }

    // slideInRight
    &-slide-in-right-enter {
      transform: translateX(50%);
    }

    &-slide-in-right-enter-active {
      transition: transform 0.2s;
    }

    &-slide-in-right-leave-active {
      transition: opacity 0.3s linear;
      opacity: 0;
    }
  }
</style>
