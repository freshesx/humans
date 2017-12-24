<template>
  <div class="mn-input" :class="{ [`is-${size}`]: !!size }">
    <input
      :type="type"
      class="mn-input-control"
      :class="{ 'is-focus': isFocus }"
      :value="parseBefore(value)"
      :placeholder="placeholder"
      :readonly="readonly"
      :disabled="disabled"
      @input="changeValue"
      @focus="onFocus">
    <div class="mn-input-mask" :class="{ 'is-focus': isFocus }"></div>
    <transition name="mn-input-clear">
      <div
        v-if="value && !hideClear"
        class="mn-input-clear"
        @click="clearValue">
        <mn-icon class="mn-input-clear-icon" :name="clearIcon"></mn-icon>
      </div>
    </transition>
  </div>
</template>

<script>
  import icon from '@humans/icon'
  import clearIcon from 'vue-human-icons/js/ios/close'

  export default {
    components: Object.assign({}, icon),
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
          return ['text', 'password'].includes(val)
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
      },
      size: String,
      hideClear: Boolean
    },
    data () {
      return {
        clearIcon,
        isFocus: false
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
      },
      onFocus () {
        this.isFocus = true
        setTimeout(() => {
          this.isFocus = false
        }, 672)
      }
    }
  }
</script>
