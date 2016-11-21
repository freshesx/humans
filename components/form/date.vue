<template>
  <div :class="[ `${cssPrefix}form-text` ]">
    <input
      :type="type"
      :class="[ `${cssPrefix}form-text-input` ]"
      :value="value"
      :readonly="readonly"
      :disabled="disabled"
      @input="changeValue">
  </div>
</template>

<script>
  export default {
    props: {
      value: {
        type: null,
        default: undefined,
        required: true
      },
      type: {
        type: String,
        default: 'datetime-local',
        validator: val => {
          return ['datetime-local', 'date', 'month', 'week', 'time'].includes(val)
        }
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
