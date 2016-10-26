<template>
  <div :class="classes" v-if="this.$parent.flag === this._uid && this.show">
    <slot></slot>
  </div>
</template>

<script>
  import classes from './classes'
  export default {
    props: {
      title: {
        type: String
      },
      icon: {
        type: String
      },
      link: {
        type: String
      },
      show: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      classes () {
        return classes('tab-content')
        // Add css prefix
      }
    }
  }
</script>
