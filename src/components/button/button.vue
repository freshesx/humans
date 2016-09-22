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
      }
    },
    computed: {
      classes () {
        let classes = {}

        // success, error, secondary, etc.
        classes[`btn-${this.type}`] = true

        return classes
      }
    }
  }
</script>
