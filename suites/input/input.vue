<template>
  <div class="mn-input">
    <input
      :type="type"
      class="mn-input-control"
      :value="parseBefore(value)"
      :placeholder="placeholder"
      :readonly="readonly"
      :disabled="disabled"
      @input="changeValue">
    <transition name="mn-input-clear">
      <div
        v-if="value"
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
      }
    },
    data () {
      return {
        iosCloseOutline
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
  })
</script>

<style lang="scss">
  @import "../../scss/vars";

  .mn-input {
    display: flex;

    &-control {
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
