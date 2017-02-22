<template>
  <select
    class="mn-select"
    :value="value"
    @input="onInput">
    <option
      :value="option.value"
      v-for="option in options">{{ option.label }}</option>
  </select>
</template>

<script>
  import Element from '../../util/element'

  export default new Element({
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
    methods: {
      onInput (event) {
        this.$emit('input', event.target.value)
      }
    }
  })
</script>

<style lang="scss">
  .mn-select {
    border: 0;
    outline: 0;
    background: transparent;
    width: 100%;
    height: 3.5rem;
    line-height: 3.5rem;
    margin: -1rem 0;
    -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;
  }
</style>
