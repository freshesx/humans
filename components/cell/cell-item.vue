<template>
  <mn-card-item :type="type">
    <mn-card-prefix @click.native="select" v-if="!isHideSelection">
      <cell-icon :checked="isChecked"></cell-icon>
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
      item: {
        type: Object
      }
    },
    mounted () {
      // console.log(this)
    },
    methods: {
      select (event) {
        this.$cell.toggleSelection(this.item)
      }
    },
    computed: {
      isChecked () {
        return this.$cell.selections.includes(this.item)
      },
      isHideSelection () {
        return this.$cell.hideSelections
      },
      $cell () {
        return this.$parent.$parent
      }
    }
  })
</script>

<style lang="scss">
  // component scss
</style>
