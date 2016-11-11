<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        collapses: new Map(),
        defaultClasses: this.$human.cssPrefix,
        current: this.selected
      }
    },
    props: {
      selected: {
        type: Number,
        default: -1
      },
      type: {
        type: String,
        default: 'normal'
      }
    },
    mounted () {
      const map = new Map()
      this.$children.forEach((collapse, index) => map.set(collapse._uid, index))
      this.collapses = map
      // Push the _uid and the index into a map.
    },
    computed: {
      classes () {
        let classes = {}
        // basic class
        classes[`${this.$human.cssPrefix}collapse`] = true
        // return default and now classes
        return Object.assign({}, classes)
      }
    }
  }
</script>
