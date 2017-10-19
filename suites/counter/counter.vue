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
      <input type="number" class="mn-counter-control" :value="value" @blur="input">
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
  import Element from '../../utils/Element'
  import icon from '../icon/icon'
  import iosMinusEmpty from 'vue-human-icons/js/ios/minus-empty'
  import iosPlusEmpty from 'vue-human-icons/js/ios/plus-empty'

  export default new Element({
    components: {
      ...icon.insert()
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
          newValue = this.value
          event.target.value = this.value
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
  @import "../../scss/mixins/media";
  @import "./vars";

  .mn-counter {
    display: flex;
    max-width: 10rem;
  }

  .mn-counter-box {
    flex-shrink: 1;
  }

  .mn-counter-control {
    // 去除游览器默认样式
    appearance: none;
    outline: none;
    border-radius: 0;

    width: 100%;
    display: block;
    padding: (($-mn-counter-height - 1.5rem) / 2) 0.5rem;
    height: $-mn-counter-height;
    text-align: center;
    border: none;
    background: transparent;
    border-top: solid 1px #ddd;
    border-bottom: solid 1px #ddd;

    // 去除 chrome, safari 右侧的上下控制条
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      margin: 0;
      -webkit-appearance: none;
    }

    // 去除 firefox 右侧的上下控制条
    &[type="number"] {
      -moz-appearance: textfield;
    }

    // @todo 检查 IE 右侧的上下控制条
    // @todo 检查 Android 右侧的上下控制条
  }

  .mn-counter-btn {
    flex-shrink: 0;
    border: solid 1px #ddd;
    background: transparent;
    width: 3rem;
    height: $-mn-counter-height;
    text-align: center;
    cursor: pointer;
    padding: 0;
    appearance: none;
    outline: none;

    &.is-disabled {
      background: #eee;
    }

    &:first-child {
      border-top-left-radius: $mn-counter-mobile-radius;
      border-bottom-left-radius: $mn-counter-mobile-radius;
    }

    &:last-child {
      border-top-right-radius: $mn-counter-mobile-radius;
      border-bottom-right-radius: $mn-counter-mobile-radius;
    }

    @include min-screen(desktop) {
      &:first-child {
        border-top-left-radius: $mn-counter-desktop-radius;
        border-bottom-left-radius: $mn-counter-desktop-radius;
      }

      &:last-child {
        border-top-right-radius: $mn-counter-desktop-radius;
        border-bottom-right-radius: $mn-counter-desktop-radius;
      }
    }
  }
</style>
