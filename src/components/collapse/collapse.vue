<template>
  <div :class="[ `${cssPrefix}collapse` ]">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'mn-collapse',
    data () {
      return {
        collapses: new Map(),
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
    computed: {
      cssPrefix () {
        return this.$human.cssPrefix
      }
    },
    mounted () {
      const map = new Map()
      this.$children.forEach((collapse, index) => map.set(collapse._uid, index))
      this.collapses = map
      // Push the _uid and the index into a map.
    }
  }
</script>
