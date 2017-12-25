<template>
  <div class="mn-radio-tag" :class="{ 'is-active': checked }" @click="click">
    <slot>placeholder</slot>
  </div>
</template>

<script>
  export default {
    name: 'mn-radio-tag',
    props: {
      value: null,
      data: null,
      disabled: Boolean
    },
    computed: {
      checked () {
        return this.data === this.value
      }
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
