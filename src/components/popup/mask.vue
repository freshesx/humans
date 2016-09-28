<template>
  <div class="popup-mask" :style="{ 'z-index': zIndex }" transition="is-fade" @click="close"></div>
</template>

<script>
  export default {
    methods: {
      close () {
        this.$dispatch('mask.close')
      }
    },
    data () {
      return {
        zIndex: 2000
      }
    }
  }
</script>
