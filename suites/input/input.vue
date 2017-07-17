<template>
  <div class="mn-input" :class="{ [`is-${size}`]: !!size }">
    <input
      :type="type"
      class="mn-input-control"
      :value="parseBefore(value)"
      :placeholder="placeholder"
      :readonly="readonly"
      :disabled="disabled"
      @input="changeValue"
      @focus="onFocus">
    <div class="mn-input-mask" :class="{ 'is-active': isFocus }"></div>
    <transition name="mn-input-clear">
      <div
        v-if="value && !hideClear"
        class="mn-input-clear"
        @click="clearValue">
        <mn-icon :name="iosCloseOutline"></mn-icon>
      </div>
    </transition>
  </div>
</template>

<script>
  import Element from '../../utils/Element'
  import icon from '../icon/icon'
  import iosCloseOutline from 'vue-human-icons/js/ios/close-outline'

  export default new Element({
    components: {
      ...icon.inject()
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
        iosCloseOutline,
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

  @keyframes mn-input-mask {
    0%, 100% {
      transform: scale(0);
    }
    50% {
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
    }

    &.is-lg {
      .mn-input-control {
        height: 3.5rem;
        line-height: 3.5;
      }
    }

    &-mask {
      position: absolute;
      width: 100px;
      height: 100px;
      background: rgba($green, 0.3);
      transition-duration: 366ms;
      transform: scale(0);
      border-radius: 50px;
      left: -25px;

      &.is-active {
        animation: 800ms mn-input-mask;
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
  }
</style>
