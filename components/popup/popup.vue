<template>
  <transition :name="transition">
    <div class="popup" v-if="show" :class="classes" :style="style">
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
      position: {
        type: String,
        validator: (val) => {
          return ['center', 'top'].includes(val)
        }
      },
      animation: {
        type: String,
        default: 'fadeIn',
        validator: (val) => {
          return ['fadeIn', 'slideInDown'].includes(val)
        }
      },
      masked: {
        type: Boolean,
        default: true
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
      transition () {
        if (this.animation === 'fadeIn') {
          return 'popup-fade'
        }
        if (this.animation === 'slideInDown') {
          return 'popup-slide'
        }
      },
      style () {
        return {
          'z-index': this.zIndex
        }
      },
      classes () {
        let classes = {}

        classes[`is-${this.position}`] = this.position

        return classes
      }
    },
    data () {
      return {
        zIndex: getZIndex()
      }
    }
  }
</script>
