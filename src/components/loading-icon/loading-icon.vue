<template>
  <custom-icon></custom-icon>
</template>

<script>
  import Vue from 'vue'
  import resolveIcon from './resolve-icon'

  export default {
    name: 'mn-loading-icon',
    components: {
      CustomIcon (resolve) {
        Vue.human.loading
          ? Vue.human.loading(resolve)
          : resolveIcon(resolve)
      }
    }
  }
</script>
