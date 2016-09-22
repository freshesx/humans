<template>
  <div class="btn" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      type: {
        type: String,
        default: 'secondary'
      },
      inline: {
        type: Boolean,
        default: false
      },
      loading: {
        type: Boolean,
        twoWay: true,
        default: false
      }
    },
    computed: {
      classes () {
        let classes = {}

        // success, error, secondary, etc.
        classes[`btn-${this.type}`] = true

        // inline
        classes['btn-inline'] = this.inline

        return classes
      }
    }
  }
</script>
