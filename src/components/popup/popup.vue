<template>
  <div class="popup" v-if="show" :style="{ 'z-index': zIndex }" transition="is-slide-up">
    <slot></slot>
  </div>
</template>

<script>
  import Element from '../util/element'
  import Mask from './mask'

  export default {
    props: {
      show: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      close () {
        this.show = false
        this.destroyMask()
      },
      appendMask (zIndex) {
        this.mask = Element.create(Mask)
        this.mask.$set('zIndex', zIndex)

        // Listen mask.close click event, and exec this.close()
        this.mask.$on('mask.close', () => {
          this.close()
        })
      },
      destroyMask () {
        if (this.mask) {
          this.mask.$destroy(true)
          this.mask = null
        }
      }
    },
    watch: {
      show (newValue) {
        // If show is true, append mask to body, and deliver z-index
        if (newValue) {
          this.appendMask(this.zIndex - 1)
        }
        // If show is false, trigger close method
        if (!newValue) {
          this.close()
        }
      }
    },
    data () {
      return {
        zIndex: 20000
      }
    }
  }
</script>
