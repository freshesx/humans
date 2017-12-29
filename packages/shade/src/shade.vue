<template>
  <transition :name="transition">
    <div class="mn-shade" v-if="visible" :style="{ 'z-index': zIndex }"
      @click.prevent.stop="onHide"></div>
  </transition>
</template>

<script>
  import { layerMixin } from '@humans/layer'

  /**
   * Shade component
   */
  export default {
    name: 'mn-shade',
    mixins: [
      layerMixin
    ],
    props: {
      /**
       * Theme name
       */
      theme: String,
      /**
       * Disable click the shade to close shade
       */
      disableClosing: Boolean
    },
    methods: {
      onHide () {
        if (!this.disableClosing) this.hide()
      }
    }
  }
</script>
