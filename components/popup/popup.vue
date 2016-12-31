<template>
  <transition :name="transition">
    <div :class="[`${cssPrefix}popup`, classes]" :style="[zIndexStyle, styles]" v-if="show">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
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
          this.mask = this.$human.element(Mask)
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
          this.mask.$el.remove()
          this.mask.$destroy()
        }
      }
    },
    watch: {
      show (newValue) {
        // If show is true, append mask to body, and deliver z-index
        if (newValue) {
          this.appendMask(this.computedZIndex - 1)
        }

        if (!newValue) {
          this.destroyMask()
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
