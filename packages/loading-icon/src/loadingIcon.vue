<template>
  <span class="mn-loading-icon"></span>
</template>

<script>
  import Vue from 'vue'
  import share from '@humans/share'
  import defaultIcon from './icon.vue'

  /**
   * Loading icon
   */
  export default {
    name: 'mn-loading-icon',
    props: {
      /**
       * Developer can make a custom icon to replace default icon
       */
      icon: {
        type: Object,  // need a vue element
        default () {
          const customIcon = share.getLoading()
          const Component = Vue.extend(customIcon || defaultIcon)
          return new Component().$mount()
        }
      }
    },
    mounted () {
      this.$el.appendChild(this.icon.$el)
    },
    beforeDestroy () {
      this.$el.removeChild(this.icon.$el)
    }
  }
</script>
