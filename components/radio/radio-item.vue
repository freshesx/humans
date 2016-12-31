<template>
  <mn-card-item @click.native.prevent="click" type="cursor">
    <slot></slot>
    <mn-card-suffix action>
      <mn-radio-icon :checked="value === data"></mn-radio-icon>
    </mn-card-suffix>
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
