<template>
  <input type="text" name="name" :value="this.default" :class="classes">
</template>

<script>
  export default {
    computed: {
      classes () {
        let classes = {}
        // basic class
        classes[`${this.$human.cssPrefix}quantity-input`] = true
        // return default and now classes
        return Object.assign({}, classes)
      }
    },
    props: {
      default: {
        type: Number,
        default: 0
      }
    },
    data () {
      return {
        defaultClasses: this.$human.cssPrefix
      }
    }
  }
</script>
