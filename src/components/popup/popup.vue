<template>
  <transition :name="transition">
    <div :class="[`${cssPrefix}popup`, classes]" :style="[zIndexStyle, styles]" v-if="show">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
  import Vue from 'vue'
  import Mask from './mask'
  import { getZIndex } from './layer'

  export default {
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
      styles: {
        type: [Object, Array]
      },
      classes: {
        type: [Object, Array]
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
          this.mask = new (Vue.extend(Mask))({ el: document.createElement('div') })
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
      cssPrefix () {
        return this.$human.cssPrefix
      },
      animations () {
        return {
          fadeIn: `${this.cssPrefix}popup-fade`,
          slideInDown: `${this.cssPrefix}popup-slide`,
          slideInUp: `${this.cssPrefix}popup-slideup`
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
  }
</script>

<style lang="scss">
  @import "../../sass/vars";

  .#{$namespace}popup {
    position: fixed;
    right: $grid-gutters / 2;
    bottom: $grid-gutters / 2;
    left: $grid-gutters / 2;

    &-dialog {
      width: 280px;
      top: 45%;
      right: auto;
      bottom: auto;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    &-toastr {
      top: 0.5rem;
      right: 0.5rem;
      left: 0.5rem;
      bottom: auto;
    }

    &-toastr-box {
      max-width: 560px;
      margin: 0 auto;
      background: rgba(255, 255, 255, 0.95);
      padding: 0.875rem 2rem;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      text-align: center;
      border-radius: $base-radius;
      cursor: pointer;

      &.is-primary {
        background: rgba($green, 0.8);
        color: darken($green, 60%);
      }

      &.is-warning {
        background: rgba($orange, 0.8);
        color: #fff;
      }

      &.is-error {
        background: rgba($red, 0.8);
        color: #fff;
      }
    }

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
