<template>
    <mn-icon :name="setName" :style="setColor"></mn-icon>
</template>

<script>
  import Icon from '../icon/icon'

  export default {
    components: {
      [Icon.name]: Icon
    },
    name: 'mn-rate-item',
    data () {
      return {
        iosStar: require('vue-human-icons/js/ios/star'),
        iosStarOutline: require('vue-human-icons/js/ios/star-outline')
      }
    },
    props: {
      index: {
        type: Number,
        required: true
      },
      count: {
        type: Number,
        default: -1
      }
    },
    computed: {
      setColor () {
        return `color: ${this.$parent.color}`
        // Set star's color by 'this.$parent.color'
      },
      setName () {
        let isInteger = this.isInteger(this.count)
        // If integer or not.
        if (!isInteger) {
          if (this.index < Math.ceil(this.count)) {
            return this.iosStar
          } else if (this.index === Math.ceil(this.count)) {
            return this.iosStarOutline
          }
        } else {
          if (this.index <= this.count) {
            return this.iosStar
          }
        }
        return this.iosStarOutline
        // Change the stars by 'this.count'
      }
    },
    methods: {
      isInteger: function (num) {
        return (typeof num === 'number') && (num % 1 === 0)
      }
    }
  }
</script>
