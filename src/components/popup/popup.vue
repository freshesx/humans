<template>
  <div class="popup" v-if="show" :style="{ 'z-index': zIndex }" transition="is-slide-up">
    <slot></slot>
  </div>
</template>

<script>
  import Vue from 'vue'
  import MaskClass from './mask'

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
        const Mask = Vue.extend(MaskClass)

        this.mask = new Mask({
          el: document.createElement('div')
        })

        this.mask.$set('zIndex', zIndex)
        this.mask.$appendTo(document.body)

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
        if (newValue) {
          this.appendMask(this.zIndex - 1)
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
