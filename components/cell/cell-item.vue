<template>
  <mn-card-item :type="type" @click="click">
    <mn-card-prefix @click.native="select">
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
      type: String
    },
    mounted () {
      // console.log(this)
    },
    methods: {
      click (event) {
        // console.log(this.$parent._uid)
        // console.log(this.$parent.toggleSelection)
        // this.$parent.loading
        this.$emit('click', event, this)
      },
      select (event) {

      }
    }
  })
</script>

<style lang="scss">
  // component scss
</style>
