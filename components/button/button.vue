<template>
  <button class="btn" :class="classes">
    <mn-icon name="spinner" spin v-if="loading"></mn-icon>
    <slot v-if="!loading"></slot>
  </button>
</template>

<script>
  export default {
    props: {
      loading: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      classes () {
        let classes = {}

        // disabled
        classes['is-disabled'] = this.disabled || this.loading

        // return default and now classes
        return Object.assign({}, this.defaultClasses, classes)
      }
    },
    data () {
      return {
        // Expose default classes for mixins extend
        defaultClasses: {}
      }
    }
  }
</script>
