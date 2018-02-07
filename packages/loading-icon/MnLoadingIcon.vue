<template>
  <span class="mn-loading-icon"></span>
</template>

<script>
import Vue from 'vue'
import defaultIcon from './_icon.vue'

/**
 * Loading icon
 */
export default {
  name: 'MnLoadingIcon',
  props: {
    /**
     * Developer can make a custom icon to replace default icon
     */
    icon: {
      type: Object,  // need a vue element
      default () {
        const Component = Vue.extend(defaultIcon)
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
