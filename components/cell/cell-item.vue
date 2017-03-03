<template>
  <mn-card-item :type="type" @click="click">
    <mn-card-prefix>
      <cell-icon></cell-icon>
    </mn-card-prefix>
    <slot></slot>
  </mn-card-item>
</template>

<script>
  import Element from '../../util/element'
  import CellIcon from './cell-icon'

  export default new Element({
    name: 'mn-cell-item',
    components: {
      CellIcon
    },
    props: {
      type: String,
      id: {
        type: Number,
        required: true
      }
    },
    mounted () {
      // console.log(this)
    },
    methods: {
      click () {
        // console.log(this.$parent._uid)
        // console.log(this.$parent.toggleSelection)
        // this.$parent.loading
      }
    }
  })
</script>

<style lang="scss">
  // component scss
</style>
