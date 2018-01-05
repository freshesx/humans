<template>
  <div class="mn-textarea">
    <textarea
      class="mn-textarea-control"
      :rows="rows"
      :placeholder="placeholder"
      :readonly="readonly"
      :disabled="disabled"
      @input="changeValue">{{ value }}</textarea>
    <div class="mn-textarea-counter">
      <mn-icon :name="tipIcon"></mn-icon>
      {{ value ? value.length : 0 }}
      <span v-if="maxLength">
        / {{ maxLength }}
      </span>
    </div>
  </div>
</template>

<script>
  import { icon } from '@humans/icon'
  import tipIcon from '@freshes/icons/js/ios/grid-view-outline'

  /**
   * Textarea component
   */
  export default {
    name: 'mn-textarea',
    components: Object.assign({}, icon),
    props: {
      /**
       * For v-model
       */
      value: null,
      /**
       * Max text length
       */
      maxLength: Number,
      /**
       * Row numbers
       */
      rows: {
        type: Number,
        default: 6
      },
      /**
       * Placeholder
       */
      placeholder: String,
      /**
       * Readonly
       */
      readonly: Boolean,
      /**
       * Disabled
       */
      disabled: Boolean
    },
    data () {
      return {
        tipIcon
      }
    },
    methods: {
      changeValue (event) {
        /**
         * @event input
         * @property {String} input  - the output value
         */
        this.$emit('input', event.target.value)
      }
    }
  }
</script>
