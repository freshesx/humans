<template>
  <button class="mn-btn" :class="classes">
    <span class="mn-btn-loading" v-if="loading"></span>
    <slot v-if="!loading"></slot>
  </button>
</template>

<script>
  export default {
    props: {
      type: {
        type: String,
        default: 'secondary'
      },
      block: {
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
        classes[`is-${this.type}`] = true

        // block
        classes['is-block'] = this.block

        // disabled
        classes['is-disabled'] = this.disabled || this.loading

        return classes
      }
    }
  }
</script>
