<template>
  <span></span>
</template>

<script>
  import Vue from 'vue'
  import defaultIcon from './default-icon'

  export default {
    name: 'mn-loading-icon',
    data () {
      return {
        icon: undefined
      }
    },
    mounted () {
      const Component = Vue.extend(this.$human.loading || defaultIcon)
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
