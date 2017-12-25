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
  /**
   * Select component
   */
  export default {
    name: 'mn-select',
    props: {
      /**
       * for v-model
       */
      value: {},
      /**
       * Options, you can set any options, e.g. [ Object, Function ].
       */
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
          console && console.warn('can\'t find the value from options. Default to choose the first option.')
          return 0
        }
      }
    },
    methods: {
      onInput (event) {
        let value = this.options[parseInt(event.target.value)].value

        /**
         * @event input
         * @property {*} value - the output value
         */
        this.$emit('input', value)
      }
    }
  }
</script>
