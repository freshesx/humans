<template>
  <select
    :class="[ `${cssPrefix}form-select-control` ]"
    :value="value"
    @input="onInput">
    <option
      :value="option.value"
      v-for="option in options">{{ option.label }}</option>
  </select>
</template>

<script>
  export default {
    name: 'mn-select',
    props: {
      value: {},
      options: {
        type: Array,
        default: () => {
          return []
        }
      }
    },
    computed: {
      cssPrefix () {
        return this.$human.cssPrefix
      }
    },
    methods: {
      onInput (event) {
        this.$emit('input', event.target.value)
      }
    }
  }
</script>
