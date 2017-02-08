<template>
  <div class="mn-menu">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'mn-menu',
    data () {
      return {
        menus: new Map(),
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
      this.$children.forEach((menu, index) => map.set(menu._uid, index))
      this.menus = map
      // Push the _uid and the index into a map.
    }
  }
</script>

<style lang="scss">
  .mn-menu {
    width: 100%;
  }
</style>
