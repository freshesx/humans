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
        starColor: '#000',
        defaultColor: '#999'
      }
    },
    computed: {
      setColor () {
        if (this.index <= this.$parent.selectedIndex) {
          return `color: ${this.starColor}`
        }

        if (!this.ifInteger(this.$parent.default)) {
          if (this.index <= Math.ceil(this.$parent.default)) {
            return `color: ${this.starColor}`
          }
        } else {
          if (this.index <= this.$parent.default) {
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
        if (!this.ifInteger(this.$parent.default)) {
          if (this.index === Math.ceil(this.$parent.default)) {
            return 'ios-star-half'
          } else {
            return 'ios-star'
          }
        } else {
          return 'ios-star'
        }
      }
    },
    methods: {
      ifInteger: function (num) {
        return (typeof num === 'number') && (num % 1 === 0)
      }
    }
  }
</script>
