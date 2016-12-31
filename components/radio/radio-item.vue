<template>
  <mn-card-item @click="click" type="cursor">
    <slot></slot>
  </mn-card-item>
</template>

<script>
  export default {
    props: {
      value: null,
      data: null
    },
    methods: {
      click () {
        this.$emit('input', this.data)
      }
    }
  }
</script>
