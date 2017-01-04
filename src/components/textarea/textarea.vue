<template>
  <div :class="[ `${cssPrefix}form-textarea` ]">
    <textarea
      :class="[ `${cssPrefix}form-textarea-input` ]"
      :rows="rows"
      :placeholder="placeholder"
      :readonly="readonly"
      :disabled="disabled"
      @input="changeValue">{{ value }}</textarea>
    <div :class="[ `${cssPrefix}form-textarea-counter` ]">
      <mn-icon name="ios-grid-view-outline"></mn-icon>
      {{ value ? value.length : 0 }}
      <span v-if="maxLength">
        / {{ maxLength }}
      </span>
    </div>
  </div>
</template>

<script>
  import Icon from '../icon/icon'

  export default {
    components: {
      [Icon.name]: Icon
    },
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
    computed: {
      cssPrefix () {
        return this.$human.cssPrefix
      }
    },
    methods: {
      changeValue (event) {
        this.$emit('input', event.target.value)
      }
    }
  }
</script>
