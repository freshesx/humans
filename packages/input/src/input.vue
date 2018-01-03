<template>
  <div class="mn-input" :class="{ [`is-${size}`]: !!size }">
    <input
      :type="type"
      class="mn-input-control"
      :class="{ 'is-focus': isFocus }"
      :value="parseBeforeFn(value)"
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
  import { icon } from '@humans/icon'
  import clearIcon from 'vue-human-icons/js/ios/close'

  /**
   * Input component
   */
  export default {
    name: 'mn-input',
    components: Object.assign({}, icon),
    props: {
      /**
       * Input value
       */
      value: {
        type: null,
        default: undefined,
        required: true
      },
      /**
       * Input type, only support text and password
       */
      type: {
        type: String,
        default: 'text',
        validator: val => {
          return ['text', 'password'].includes(val)
        }
      },
      /**
       * Input placeholder
       */
      placeholder: {
        type: String
      },
      /**
       * Input readonly
       */
      readonly: {
        type: Boolean,
        default: false
      },
      /**
       * Disable input
       */
      disabled: {
        type: Boolean,
        default: false
      },
      /**
       * Input size, only support `sm`,
       * but user can add new size name and css.
       */
      size: String,
      /**
       * Hide input clear button
       */
      hideClear: Boolean,
      /**
       * Change the value before parse
       */
      parseBeforeFn: {
        type: Function,
        default (value) {
          return value
        }
      },
      /**
       * Change the value after parse
       */
      parseAfterFn: {
        type: Function,
        default (value) {
          return value.length > 0
            ? value
            : undefined
        }
      },
      /**
       * Change the value by clear
       */
      parseClearFn: {
        type: Function,
        default () {
          return undefined
        }
      }
    },
    data () {
      return {
        clearIcon,
        isFocus: false
      }
    },
    methods: {
      changeValue (event) {
        this.emitInput(this.parseAfterFn(event.target.value))
      },
      clearValue () {
        this.emitInput(this.parseClearFn())
      },
      onFocus () {
        this.isFocus = true
        setTimeout(() => {
          this.isFocus = false
        }, 672)
      },
      emitInput (value) {
        /**
         * @event input
         * @property {*} value - emit value
         */
        this.$emit('input', value)
      }
    }
  }
</script>
