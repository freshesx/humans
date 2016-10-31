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
        cannotincrease: false
      }
    },
    props: {
      default: {
        type: Number,
        default: 0
      },
      step: {
        type: Number,
        default: 1
      },
      min: {
        type: Number,
        default: 0
      },
      max: {
        type: Number,
        default: 99999
      }
    },
    methods: {
      increaseNum: function () {
        if (!this.cannotincrease) {
          this.value = this.value + this.step
          return this.value
        }
      },
      reduceNum: function () {
        if (!this.cannotreduce) {
          this.value = this.value - this.step
          return this.value
        }
      }
    },
    mounted () {
      this.value = this.min
      this.cannotreduce = true
    },
    updated () {
      this.cannotreduce = true
      this.cannotincrease = true

      if (this.value > this.min) {
        this.cannotreduce = false
      }

      if (this.value < this.max) {
        this.cannotincrease = false
      }
    }
  }
</script>
