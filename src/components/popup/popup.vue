<template>
  <div class="popup" v-if="show" :class="{ 'is-center': center }" :style="style" :transition="transition">
    <slot></slot>
  </div>
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
      }
    },
    methods: {
      // Trigger close event
      closePopup () {
        this.$emit('close')
      },
      appendMask (zIndex) {
        this.mask = Element.create(Mask)
        this.mask.zIndex = zIndex

        // Listen mask.close click event, and exec this.close()
        this.mask.$on('mask.close', () => {
          this.closePopup()
        })
      },
      destroyMask () {
        // If extis mask instance, then destory them
        if (this.mask) {
          this.mask.$el.remove()
          this.mask.$destroy()
          delete this.mask
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
        return this.center ? 'is-fade' : 'is-slide-up'
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
