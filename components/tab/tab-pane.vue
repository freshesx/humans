<template>
  <div :class="classes" v-if="this.$parent.flag === this._uid && this.show">
    <slot></slot>
  </div>
</template>

<script>
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
    data () {
      return {
        defaultClasses: {
          [`${this.$human.cssPrefix}tab-content`]: true
        }
      }
    },
    computed: {
      classes () {
        let classes = {}
        return Object.assign({}, this.defaultClasses, classes)
        // Add css prefix
      }
    }
  }
</script>
