<template>
  <div :class="[ `${cssPrefix}form-counter` ]">
    <button :class="[ `${cssPrefix}form-counter-btn`, { 'is-disabled': !enabledReduce } ]" @click="reduceCount">
      <mn-icon name="ios-minus-empty"></mn-icon>
    </button>
    <div :class="[ `${cssPrefix}form-counter-box` ]">
      <input type="number" :class="[ `${cssPrefix}form-counter-input` ]" :value="value" v-on:input="input">
    </div>
    <button :class="[ `${cssPrefix}form-counter-btn`, { 'is-disabled': !enabledIncrease } ]" @click="increaseCount">
      <mn-icon name="ios-plus-empty"></mn-icon>
    </button>
  </div>
</template>

<script>
  import Icon from '../icon/icon'

  export default {
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
    computed: {
      cssPrefix () {
        return this.$human.cssPrefix
      },
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
        const newValue = parseInt(event.target.value)
        if (!isNaN(newValue)) this.$emit('input', newValue)
      }
    }
  }
</script>
