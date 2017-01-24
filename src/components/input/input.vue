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
        <mn-icon :name="iosCloseOutline"></mn-icon>
      </div>
    </transition>
  </div>
</template>

<script>
  import Icon from '../icon/icon'
  import iosCloseOutline from 'human-icons/js/ios/close-outline'

  export default {
    components: {
      [Icon.name]: Icon
    },
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
    data () {
      return {
        iosCloseOutline
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

<style lang="scss">
  @import "../../scss/vars";

  .#{$namespace}form-text {
    display: flex;

    &-input {
      flex: 1 1;
      display: block;
      width: 100%;
      height: 1.5rem;
      border: none;
      padding: 0;
      background: transparent;
      outline: none;
      -webkit-appearance: none;
    }

    &-clear {
      flex-shrink: 0;
    }

    &-clear-enter-active {
      transition: all 0.2s ease;
    }

    &-clear-leave-active {
      transition: all 0.2s ease;
    }

    &-clear-enter,
    &-clear-leave-active {
      opacity: 0;
    }
  }
</style>
