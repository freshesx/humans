<template>
  <select class="form-select-control">
    <option :value="option.value" v-for="option in options">{{ option.label }}</option>
  </select>
</template>

<script>
  export default {
    props: {
      options: {
        type: Array,
        default: () => {
          return []
        }
      }
    }
  }
</script>
