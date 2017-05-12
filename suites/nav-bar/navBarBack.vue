<template>
  <mn-btn :class="'has-none-padding-all'" @click="$router.go(-1)">
    <mn-icon :name="icons.arrowBack"></mn-icon>
    <slot></slot>
  </mn-btn>
</template>

<script>
  import Element from '../../utils/Element'
  import arrowBack from 'vue-human-icons/js/ios/arrow-back'

  export default new Element({
    name: 'mn-nav-bar-back',
    data () {
      return {
        icons: {
          arrowBack
        }
      }
    }
  })
</script>
