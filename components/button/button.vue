<template>
  <button
    :class="[`${cssPrefix}btn`, classes]"
    :title="title"
    @click="click">
    <mn-loading-icon v-if="loading"></mn-loading-icon>
    <slot v-if="!loading"></slot>
  </button>
</template>

<script>
  export default {
    props: {
      title: String,
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
      },
      // is circle
      circle: {
        type: Boolean,
        default: false
      },
      // is outline
      outline: {
        type: Boolean,
        default: false
      },
      margin: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      cssPrefix () {
        return this.$human.cssPrefix
      },
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

        // circle
        classes['is-circle'] = this.circle

        // outline
        classes['is-outline'] = this.outline

        // margin bottom
        classes['is-margin-bottom'] = this.margin

        return classes
      }
    },
    methods: {
      click ($event) {
        if (!this.disabled) {
          this.$emit('click', $event)
        } else {
          this.$emit('error', $event)
        }
      }
    }
  }
</script>
