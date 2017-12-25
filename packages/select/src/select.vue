<template>
  <select
    class="mn-select"
    :value="computedValue"
    @input="onInput">
    <option
      :value="index"
      :alt="option.value"
      v-for="(option, index) in options">{{ option.label }}</option>
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
      computedValue () {
        let options = this.options.filter(item => item.value === this.value)

        if (options.length > 0) {
          return this.options.indexOf(options[0])
        } else {
          console && console.warn('未找到匹配的 select value 值。')
          return 0
        }
      }
    },
    methods: {
      onInput (event) {
        let value = this.options[parseInt(event.target.value)].value
        this.$emit('input', value)
      }
    }
  }
</script>
