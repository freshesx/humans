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
  import icon from '@humans/icon'
  import tipIcon from 'vue-human-icons/js/ios/grid-view-outline'

  export default {
    components: Object.assign({}, icon),
    name: 'mn-textarea',
    props: {
      value: {
        type: null,
        default: undefined,
        required: true
      },
      maxLength: {
        type: Number
      },
      rows: {
        type: Number,
        default: 6
      },
      placeholder: {
        type: String
      },
      readonly: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        tipIcon
      }
    },
    methods: {
      changeValue (event) {
        this.$emit('input', event.target.value)
      }
    }
  }
</script>
