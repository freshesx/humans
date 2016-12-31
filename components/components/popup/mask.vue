<template>
  <transition :name="`${cssPrefix}popup-mask-fade`">
    <div :class="[ `${cssPrefix}popup-mask` ]" v-if="show" :style="{ 'z-index': zIndex }" @click="close"></div>
  </transition>
</template>

<script>
  export default {
    methods: {
      close () {
        this.$emit('close')
      }
    },
    computed: {
      cssPrefix () {
        return this.$human.cssPrefix
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
