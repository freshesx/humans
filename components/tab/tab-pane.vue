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
        defaultClasses: this.$human.cssPrefix
      }
    },
    computed: {
      classes () {
        let classes = {}
        // basic class
        classes[`${this.$human.cssPrefix}tab-content`] = true
        // return default and now classes
        return Object.assign({}, classes)
      }
    }
  }
</script>
