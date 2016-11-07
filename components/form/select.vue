<template>
  <select class="form-select-control" :value="value" @input="onInput">
    <option :value="option.value" v-for="option in options">{{ option.label }}</option>
  </select>
</template>

<script>
  export default {
    props: {
      value: {},
      options: {
        type: Array,
        default: () => {
          return []
        }
      }
    },
    methods: {
      onInput (event) {
        this.$emit('input', event.target.value)
      }
    }
  }
</script>
