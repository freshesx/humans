<template>
  <div :class="[ `${cssPrefix}form-text` ]">
    <input
      :type="type"
      :class="[ `${cssPrefix}form-text-input` ]"
      :value="parseBefore(value)"
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
    name: 'mn-input',
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
        this.$emit('input', this.parseAfter(event.target.value))
      },
      clearValue () {
        this.$emit('input', this.parseClear())
      },
      parseBefore () {
        return this.value
      },
      parseAfter (newValue) {
        return newValue.length > 0
          ? newValue
          : undefined
      },
      parseClear () {
        return undefined
      }
    }
  }
</script>
