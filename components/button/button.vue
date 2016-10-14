<template>
  <button :class="classes">
    <mn-icon name="load-c" spin v-if="loading"></mn-icon>
    <slot v-if="!loading"></slot>
  </button>
</template>

<script>
  export default {
    props: {
      // is loading
      loading: {
        type: Boolean,
        default: false
      },
      // is disabled
      // @todo hover tips
      disabled: {
        type: Boolean,
        default: false
      },
      active: {
        type: Boolean,
        default: false
      },
      // is-primary, is-secondary, is-error etc.
      type: {
        type: String
      },
      // is block
      block: {
        type: Boolean,
        default: false
      },
      // is-sm
      size: {
        type: String
      }
    },
    computed: {
      classes () {
        let classes = {}

        // type
        classes[`is-${this.type}`] = this.type

        // size
        classes[`is-${this.size}`] = this.size

        // block
        classes['is-block'] = this.block

        // disabled
        classes['is-disabled'] = this.disabled || this.loading

        // active
        classes['is-active'] = this.active

        // return default and now classes
        return Object.assign({}, this.defaultClasses, classes)
      }
    },
    data () {
      return {
        // Expose default classes for mixins extend
        defaultClasses: {
          [`${this.$human.cssPrefix}btn`]: true
        }
      }
    }
  }
</script>
