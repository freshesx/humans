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
        twoWay: true,
        default: false
      }
    },
    computed: {
      classes () {
        let classes = {}

        // disabled
        classes['is-disabled'] = this.disabled || this.loading

        return classes
      }
    }
  }
</script>
