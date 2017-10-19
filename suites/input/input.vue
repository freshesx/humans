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
  import Element from '../../utils/Element'
  import icon from '../icon/icon'

  export default new Element({
    components: {
      ...icon.insert()
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
        clearIcon: require('vue-human-icons/js/ios/close'),
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
  })
</script>

<style lang="scss">
  @import "../../scss/vars";

  @keyframes mn-input-control {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(3px);
    }
    100% {
      transform: translateY(0);
    }
  }

  @keyframes mn-input-mask {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }

  .mn-input {
    width: 100%;
    display: flex;
    align-items: center;
    position: relative;

    &-control {
      flex: 1 1;
      display: block;
      width: 100%;
      height: 1.5rem;
      line-height: 1.5;
      border: none;
      padding: 0;
      background: transparent;
      outline: none;
      -webkit-appearance: none;

      &.is-focus {
        animation: 900ms mn-input-control;
      }
    }

    &.is-lg {
      .mn-input-control {
        height: 3.5rem;
        padding-top: 1rem;
        padding-bottom: 1rem;
      }
    }

    &-mask {
      $radius: 80px;
      position: absolute;
      width: $radius;
      height: $radius;
      background: rgba($blue, 0.03);
      transform: scale(0);
      border-radius: $radius / 2;
      top: $radius * -0.5 + 28px;
      left: $radius * -0.1;

      &.is-focus {
        animation: 366ms mn-input-mask;
      }
    }

    &-clear {
      flex-shrink: 0;
      cursor: pointer;
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

    &-clear-icon {
      color: rgba(0, 0, 0, 0.2);
    }
  }
</style>
