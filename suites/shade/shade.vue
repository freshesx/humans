<template>
  <transition :name="transition">
    <div class="mn-shade" v-if="visible" :style="{ 'z-index': zIndex }"
      @click="onHide"></div>
  </transition>
</template>

<script>
  import Element from '../../utils/Element'

  export default new Element({
    name: 'mn-shade',
    props: {
      theme: String,
      visible: Boolean,
      zIndex: {
        type: Number,
        default: 2000
      },
      transition: {
        type: String,
        default: 'mn-shade-fade'
      }
    },
    methods: {
      onHide () {
        this.hide()
      },
      hide () {
        this.$emit('update:visible', false)
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
