<template>
  <mn-card-item type="cursor" :disabled="disabled" @click="click">
    <slot></slot>
  </mn-card-item>
</template>

<script>
  export default {
    name: 'mn-radio-item',
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
