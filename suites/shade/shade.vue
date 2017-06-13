<template>
  <transition :name="transition">
    <div class="mn-shade" v-if="visible" :style="{ 'z-index': zIndex }"
      @click="onHide"></div>
  </transition>
</template>

<script>
  import Element from '../../utils/Element'
  import layerMixin from '../layer/layerMixin'

  export default new Element({
    name: 'mn-shade',
    mixins: [
      layerMixin
    ],
    props: {
      theme: String,
      disableClosing: Boolean
    },
    methods: {
      onHide () {
        if (!this.disableClosing) this.hide()
      }
    }
  })
</script>

<style lang="scss">
  .mn-shade {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: #000;
    opacity: 0.4;
    z-index: 1000;
  }

  .mn-shade-fade-enter-active,
  .mn-shade-fade-leave-active {
    transition: opacity 0.3s linear;
  }

  .mn-shade-fade-enter,
  .mn-shade-fade-leave-active {
    opacity: 0;
  }
</style>
