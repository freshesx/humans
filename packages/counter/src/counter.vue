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
  import { icon } from '@humans/icon'
  import minusIcon from '@freshes/icons/js/ios/minus-empty'
  import plusIcon from '@freshes/icons/js/ios/plus-empty'

  /**
   * Counter component
   */
  export default {
    name: 'mn-counter',
    components: Object.assign({}, icon),
    props: {
      /**
       * Counter value
       */
      value: {
        type: Number,
        default: 0
      },
      /**
       * Step of increase or reduce the value
       */
      step: {
        type: Number,
        default: 1
      },
      /**
       * The min value
       */
      min: {
        type: Number,
        default: 0
      },
      /**
       * The max value
       */
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
        if (newValue >= this.min) this.emitInput(newValue)
      },
      increaseCount () {
        const newValue = this.value + this.step
        if (newValue <= this.max) this.emitInput(newValue)
      },
      input (event) {
        let newValue = parseInt(event.target.value)

        // If the value is NaN, then reuse old value
        if (isNaN(newValue)) {
          newValue = this.value
          event.target.value = this.value
        }

        // If the value is less than old value
        if (newValue < this.min) {
          newValue = this.min
          event.target.value = newValue
        }

        // If the value is great then old value
        if (newValue > this.max) {
          newValue = this.max
          event.target.value = newValue
        }

        // The new value is valid
        this.emitInput(newValue)
      },
      emitInput (newValue) {
        /**
         * Emit new value for v-model
         * @event input
         * @property {Number}  - The new value
         */
        this.$emit('input', newValue)
      }
    }
  }
</script>
