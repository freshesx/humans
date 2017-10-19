<template>
  <mn-card-item type="cursor" :disabled="disabled" @click="click">
    <slot></slot>
  </mn-card-item>
</template>

<script>
  import Element from '../../utils/Element'
  import cardItem from '../card/cardItem'

  export default new Element({
    name: 'mn-radio-item',
    components: {
      ...cardItem.insert()
    },
    props: {
      value: null,
      data: null,
      disabled: Boolean
    },
    methods: {
      click () {
        if (!this.disabled) {
          this.$emit('input', this.data)
        }
      }
    }
  })
</script>
