<template>
  <mn-card-item :type="type" @click="click">
    <mn-card-prefix @click.native.stop="select" v-if="!isHideSelection">
      <mn-cell-icon :checked="isChecked"></mn-cell-icon>
    </mn-card-prefix>
    <slot></slot>
  </mn-card-item>
</template>

<script>
  import Element from '../../utils/Element'
  import cardItem from '../card/cardItem'
  import cardPrefix from '../card/cardPrefix'
  import cellIcon from './cellIcon'

  export default new Element({
    name: 'mn-cell-item',
    components: {
      ...cardItem.insert(),
      ...cardPrefix.insert(),
      ...cellIcon.insert()
    },
    props: {
      type: String,
      item: {
        type: Object
      }
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
