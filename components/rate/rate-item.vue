<template>
    <mn-icon :name="setName" :style="setColor"></mn-icon>
</template>

<script>
  export default {
    props: {
      index: {
        type: Number,
        required: true
      }
    },
    data () {
      return {
        starColor: this.$parent.colors[1],
        defaultColor: this.$parent.colors[0]
      }
    },
    computed: {
      setColor () {
        if (this.index <= this.$parent.selectedIndex) {
          return `color: ${this.starColor}`
        }

        if (!this.ifInteger(this.$parent.defaultIndex) && this.$parent.ifDefault) {
          if (this.index <= Math.ceil(this.$parent.defaultIndex)) {
            return `color: ${this.starColor}`
          }
        } else {
          if (this.index <= this.$parent.defaultIndex) {
            return `color: ${this.starColor}`
          }
        }

        if (this.index <= this.$parent.currentIndex) {
          return `color: ${this.starColor}`
        } else {
          return `color: ${this.defaultColor}`
        }
      },
      setName () {
        if (!this.ifInteger(this.$parent.default) && this.$parent.ifDefault) {
          if (this.$parent.currentIndex < 0) {
            if (this.index === Math.ceil(this.$parent.default)) {
              return 'ios-star-half'
            }
          }
        }
        return 'ios-star'
      }
    },
    methods: {
      ifInteger: function (num) {
        return (typeof num === 'number') && (num % 1 === 0)
      }
    }
  }
</script>
