<template>
  <mn-card-item type="cursor" :disabled="disabled" @click="click">
    <slot></slot>
  </mn-card-item>
</template>

<script>
  import card from '@humans/card'

  export default {
    name: 'mn-radio-item',
    components: Object.assign({}, card),
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
  }
</script>
