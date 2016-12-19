<template>
  <div :class="[ `${cssPrefix}form-text` ]">
    <input
      :type="type"
      :class="[ `${cssPrefix}form-text-input` ]"
      :value="value"
      :placeholder="placeholder"
      :readonly="readonly"
      :disabled="disabled"
      @input="changeValue">
    <transition :name="`${cssPrefix}form-text-clear`">
      <div
        v-if="value"
        :class="[ `${cssPrefix}form-text-clear` ]"
        @click="clearValue">
        <mn-icon name="ios-close-outline"></mn-icon>
      </div>
    </transition>
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
        default: 'text',
        validator: val => {
          return ['text', 'number', 'password'].includes(val)
        }
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
        let value = event.target.value.length > 0
          ? event.target.value
          : undefined
        this.$emit('input', value)
      },
      clearValue () {
        this.$emit('input', undefined)
      }
    }
  }
</script>
