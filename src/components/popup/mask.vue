<template>
  <transition name="popup-mask-fade">
    <div class="popup-mask" v-if="show" :style="{ 'z-index': zIndex }" @click="close"></div>
  </transition>
</template>

<script>
  export default {
    methods: {
      close () {
        this.$emit('mask.close')
      }
    },
    data () {
      return {
        zIndex: 2000,
        show: false
      }
    }
  }
</script>
