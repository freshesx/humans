<template>
    <i>
      <mn-icon :name="setName" :style="setColor"></mn-icon>
    </i>
  </span>
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
        starColor: '#000'
      }
    },
    computed: {
      setColor () {
        if (!this.ifInteger(this.$parent.default)) {
          if (this.index <= Math.ceil(this.$parent.default)) {
            return `color: ${this.starColor}`
          }
        } else {
          if (this.index <= this.$parent.default) {
            return `color: ${this.starColor}`
          }
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
