<template>
  <span class="mn-loading-icon"></span>
</template>

<script>
  import Vue from 'vue'
  import icon from './icon.vue'

  export default {
    name: 'mn-loading-icon',
    props: {
      icon: {
        type: Object,  // is a vueComponent
        default () {
          const Component = Vue.extend(icon)
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
