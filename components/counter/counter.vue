<template>
  <div class="mn-counter">
    <button
      class="mn-counter-btn"
      :class="{ 'is-disabled': !enabledReduce }"
      @click.prevent.stop="reduceCount">
      <mn-icon :name="iosMinusEmpty"></mn-icon>
    </button>
    <div
      class="mn-counter-box">
      <input type="number" class="mn-counter-control" :value="value" @input="input">
    </div>
    <button
      class="mn-counter-btn"
      :class="{ 'is-disabled': !enabledIncrease }"
      @click.prevent.stop="increaseCount">
      <mn-icon :name="iosPlusEmpty"></mn-icon>
    </button>
  </div>
</template>

<script>
  import Element from '../../util/element'
  import Icon from '../icon/icon'
  import iosMinusEmpty from 'vue-human-icons/js/ios/minus-empty'
  import iosPlusEmpty from 'vue-human-icons/js/ios/plus-empty'

  export default new Element({
    components: {
      [Icon.name]: Icon
    },
    name: 'mn-counter',
    props: {
      value: {
        type: Number,
        default: 0
      },
      // options: Multiplied increase or reduce of the value
      step: {
        type: Number,
        default: 1
      },
      // options: The min value
      min: {
        type: Number,
        default: 0
      },
      // options: The max value
      max: {
        type: Number,
        default: 999999
      }
    },
    data () {
      return {
        iosMinusEmpty,
        iosPlusEmpty
      }
    },
    computed: {
      enabledReduce () {
        return this.value > this.min
      },
      enabledIncrease () {
        return this.value < this.max
      }
    },
    methods: {
      reduceCount () {
        const newValue = this.value - this.step
        if (newValue >= this.min) this.$emit('input', newValue)
      },
      increaseCount () {
        const newValue = this.value + this.step
        if (newValue <= this.max) this.$emit('input', newValue)
      },
      input (event) {
        let newValue = parseInt(event.target.value)

        // 非数字
        if (isNaN(newValue)) {
          return
        }

        // 不可小于最小值
        if (newValue < this.min) {
          newValue = this.min
          event.target.value = newValue
        }

        // 不可大于最大值
        if (newValue > this.max) {
          newValue = this.max
          event.target.value = newValue
        }

        // 输出
        this.$emit('input', newValue)
      }
    }
  })
</script>

<style lang="scss">
  @import "../../scss/vars";

  .mn-counter {
    display: flex;
    max-width: 8rem;

    &-box {
      flex-shrink: 1;
      border-top: solid 1px #ddd;
      border-bottom: solid 1px #ddd;
    }

    &-control {
      width: 100%;
      display: block;
      padding: 0.25rem 0.5rem;
      text-align: center;
      outline: none;
      -webkit-appearance: none;
      -webkit-tap-highlight-color: transparent;
      border: none;
      background: transparent;

      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none !important;
        margin: 0;
      }

      &[type="number"] {
        -moz-appearance: textfield;
      }
    }

    &-btn {
      flex-shrink: 0;
      border: solid 1px #ddd;
      background: transparent;
      width: 2.375rem;
      text-align: center;
      cursor: pointer;
      padding: 0;
      -webkit-appearance: none;
      -webkit-tap-highlight-color: transparent;

      &.is-disabled {
        background: #eee;
        outline: none;
      }

      &:first-child {
        border-top-left-radius: $base-radius;
        border-bottom-left-radius: $base-radius;
      }

      &:last-child {
        border-top-right-radius: $base-radius;
        border-bottom-right-radius: $base-radius;
      }
    }
  }
</style>
