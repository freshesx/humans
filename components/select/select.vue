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

<style lang="scss">
  @import "../../scss/vars";

  .#{$namespace}form-select-control {
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
