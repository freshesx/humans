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
        current: -1
      }
    },
    props: {
      selected: {
        type: Number,
        default: 0
      }
    },
    mounted () {
      const map = new Map()
      this.$children.forEach((collapse, index) => map.set(collapse._uid, index))
      this.collapses = map
      this.current = this.selected
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
