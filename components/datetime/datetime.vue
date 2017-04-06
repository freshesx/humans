<template>
  <div class="mn-input">
    <input
      class="mn-input-control"
      :type="type"
      :value="value"
      :readonly="readonly"
      :disabled="disabled"
      @input="changeValue">
  </div>
</template>

<script>
  import Element from '../../util/Element'
  import '../input/input'  // import input for scss

  export default new Element({
    name: 'mn-datetime',
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
    methods: {
      changeValue (event) {
        this.$emit('input', event.target.value)
      }
    }
  })
</script>
