<template>
  <transition :name="transition">
    <div class="popup" v-if="show" :class="{ 'is-center': center }" :style="style">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
  import Element from '../util/element'
  import Mask from './mask'
  import { getZIndex } from './layer'

  export default {
    props: {
      show: {
        type: Boolean,
        default: false
      },
      center: {
        type: Boolean,
        default: false
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
          this.mask = Element.create(Mask)
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
        return this.center ? 'popup-fade' : 'popup-slide'
      },
      style () {
        return {
          'z-index': this.zIndex
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
