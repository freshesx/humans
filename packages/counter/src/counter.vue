<template>
  <div class="mn-counter">
    <button
      class="mn-counter-btn"
      :class="{ 'is-disabled': !enabledReduce }"
      @click.prevent.stop="reduceCount">
      <mn-icon :name="minusIcon"></mn-icon>
    </button>
    <div
      class="mn-counter-box">
      <input type="number" class="mn-counter-control" :value="value" @blur="input">
    </div>
    <button
      class="mn-counter-btn"
      :class="{ 'is-disabled': !enabledIncrease }"
      @click.prevent.stop="increaseCount">
      <mn-icon :name="plusIcon"></mn-icon>
    </button>
  </div>
</template>

<script>
  import icon from '@humans/icon'
  import minusIcon from 'vue-human-icons/js/ios/minus-empty'
  import plusIcon from 'vue-human-icons/js/ios/plus-empty'

  export default {
    name: 'mn-counter',
    components: Object.assign({}, icon),
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
        minusIcon,
        plusIcon
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
  }
</script>
