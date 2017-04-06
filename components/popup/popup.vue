<template>
  <transition :name="transition">
    <div class="mn-popup" :style="zIndexStyle" v-if="show">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
  import Element from '../../util/Element'
  import Vue from 'vue'
  import maskElement from './mask'
  import { getZIndex } from './layer'

  export default new Element({
    name: 'mn-popup',
    props: {
      show: {
        type: Boolean,
        default: false
      },
      animation: {
        type: String,
        default: 'fadeIn'
      },
      masked: {
        type: Boolean,
        default: true
      },
      zIndex: {
        type: Number
      }
    },
    methods: {
      // Trigger close event
      closePopup () {
        this.$emit('close')
      },
      appendMask (zIndex) {
        if (this.masked) {
          this.mask = new (Vue.extend(maskElement))({
            el: document.createElement('div')
          })
          document.body.appendChild(this.mask.$el)
          this.mask.zIndex = zIndex
          this.mask.show = true

          // Listen mask.close click event, and exec this.close()
          this.mask.$on('close', () => {
            this.closePopup()
          })
        }
      },
      destroyMask () {
        // If extis mask instance, then destory them
        if (this.mask) {
          this.mask.show = false
          document.body.removeChild(this.mask.$el)
          this.mask.$destroy()
        }
      }
    },
    watch: {
      show (newValue) {
        // If show is true, append mask to body, and deliver z-index
        if (newValue) {
          document.body.appendChild(this.$el)
          this.appendMask(this.computedZIndex - 1)
        }

        if (!newValue) {
          this.destroyMask()
          setTimeout(() => {
            document.body.removeChild(this.$el)
            this.$destroy()
          }, 3000)
        }
      }
    },
    computed: {
      animations () {
        return {
          fadeIn: `mn-popup-fade`,
          slideInDown: `mn-popup-slide`,
          slideInUp: `mn-popup-slideup`
        }
      },
      transition () {
        return this.animations[this.animation]
      },
      computedZIndex () {
        return this.zIndex ? this.zIndex : getZIndex()
      },
      zIndexStyle () {
        return {
          'z-index': this.computedZIndex
        }
      }
    }
  })
</script>

<style lang="scss">
  @import "../../scss/vars";

  .mn-popup {
    position: fixed;

    // Slide from down
    &-slide-enter-active,
    &-slide-leave-active {
      transition: transform 0.3s;
    }

    &-slide-enter,
    &-slide-leave-active {
      transform: translateY(100%);
    }

    // Fade in
    &-fade-enter-active,
    &-fade-leave-active {
      transition: opacity 0.3s linear;
    }

    &-fade-enter,
    &-fade-leave-active {
      opacity: 0;
    }

    // Slide from up
    &-slideup-enter-active {
      transition: transform 0.3s;
    }

    &-slideup-leave-active {
      transition: opacity 0.3s linear;
    }

    &-slideup-enter {
      transform: translateY(-100%);
    }

    &-slideup-leave-active {
      opacity: 0;
    }
  }
</style>
