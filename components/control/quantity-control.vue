<template>
  <div :class="control">
    <button type="button" :class="reduce" @click="reduceNum">
      <mn-icon name="minus"></mn-icon>
    </button>
    <input type="text" :value="value" :class="input">
    <button type="button" :class="increase" @click="increaseNum">
      <mn-icon name="plus"></mn-icon>
    </button>
  </div>
</template>

<script>
  export default {
    computed: {
      control () {
        let classes = {}
        // basic class
        classes[`${this.$human.cssPrefix}quantity-control`] = true
        // return default and now classes
        return Object.assign({}, classes)
      },
      reduce () {
        let classes = {}
        // basic class
        classes[`${this.$human.cssPrefix}quantity-reduce-button`] = true
        // disabled
        classes['is-disabled'] = this.cannotreduce
        // return default and now classes
        return Object.assign({}, classes)
      },
      input () {
        let classes = {}
        // basic class
        classes[`${this.$human.cssPrefix}quantity-input`] = true
        // return default and now classes
        return Object.assign({}, classes)
      },
      increase () {
        let classes = {}
        // basic class
        classes[`${this.$human.cssPrefix}quantity-increase-button`] = true
        // disabled
        classes['is-disabled'] = this.cannotincrease
        // return default and now classes
        return Object.assign({}, classes)
      }
    },
    data () {
      return {
        defaultClasses: this.$human.cssPrefix,
        value: this.default,
        cannotreduce: false,
        cannotincrease: false,
        currentValue: this.value
      }
    },
    props: {
      // Provide some options
      default: {
        type: Number,
        default: 0
        // options: Default value
      },
      step: {
        type: Number,
        default: 1
        // options: Multiplied increase or reduce of the value
      },
      min: {
        type: Number,
        default: 0
        // options: The min value
      },
      max: {
        type: Number,
        default: 99999
        // options: The max value
      }
    },
    methods: {
      increaseNum: function () {
        if (!this.cannotincrease) {
          this.value = this.value + this.step
          return this.value
          // Increase
        }
      },
      reduceNum: function () {
        if (!this.cannotreduce) {
          this.value = this.value - this.step
          return this.value
          // Reduce
        }
      }
    },
    mounted () {
      if (this.value < this.min) {
        this.value = this.min
      }
      if (this.value > this.max) {
        this.value = this.max
      }
      // If the default value is not between the min and max, return min or max
    },
    watch: {
      value (val) {
        this.currentValue = val
      },

      currentValue (newVal, oldVal) {
        if (!isNaN(newVal) && newVal <= this.max && newVal >= this.min) {
          this.$emit('change', newVal)
          // Trigger the function 'change' when the value is changed
        } else {
          this.$nextTick(() => {
            this.currentValue = oldVal
          })
        }

        let reduce = newVal - this.step
        if (reduce < this.min) {
          this.cannotreduce = true
        } else {
          this.cannotreduce = false
        }
        // Disable the reduce button when the value is less than the min

        let increase = newVal + this.step
        if (increase > this.max) {
          this.cannotincrease = true
        } else {
          this.cannotincrease = false
        }
        // Disable the increase button when the value is more than the max
      }
    }
  }
</script>
