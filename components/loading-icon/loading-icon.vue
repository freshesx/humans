<template>
  <span class="mn-loading-icon"></span>
</template>

<script>
  import Vue from 'vue'
  import defaultIcon from './default-icon'

  let loadingIcon = defaultIcon

  export default {
    name: 'mn-loading-icon',
    install (InstallVue, options = {}) {
      if (options.icon && typeof options.icon === 'object') loadingIcon = options.icon
      InstallVue.component(this.name, this)
    },
    data () {
      return {
        icon: undefined
      }
    },
    mounted () {
      const Component = Vue.extend(loadingIcon)
      this.icon = new Component({ el: document.createElement('span') })

      this.$nextTick(() => {
        this.$el.appendChild(this.icon.$el)
      })
    },
    beforeDestroy () {
      this.$el.removeChild(this.icon.$el)
      this.icon.$destroy()
    }
  }
</script>
