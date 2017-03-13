<template>
  <card-item :type="type" @click="click">
    <card-prefix @click.native.stop="select" v-if="!isHideSelection">
      <cell-icon :checked="isChecked"></cell-icon>
    </card-prefix>
    <slot></slot>
  </card-item>
</template>

<script>
  import Element from '../../util/element'
  import CardItem from '../card/card-item'
  import CardPrefix from '../card/card-prefix'
  import CellIcon from './cell-icon'

  export default new Element({
    name: 'mn-cell-item',
    components: {
      CellIcon,
      CardItem,
      CardPrefix
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
      },
      click (event, cardItem) {
        this.$emit('click', event, cardItem)
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
