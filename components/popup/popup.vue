<template>
  <transition :name="transition">
    <div :class="computedClass" :style="computedStyle" v-if="show">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
  import Mask from './mask'
  import { getZIndex } from './layer'

  export default {
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
      css: {
        type: [Object, Array]
      },
      classes: {
        type: [Object]
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
          this.appendMask(this.zIndex - 1)
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
      computedClass () {
        return {
          [`${this.cssPrefix}popup`]: true,
          ...this.classes
        }
      },
      computedStyle () {
        return {
          'z-index': this.zIndex,
          ...this.css
        }
      }
    },
    data () {
      return {
        zIndex: getZIndex()
      }
    }
  }
</script>
