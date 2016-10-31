<template>
  <input type="text" name="name" value="" :class="classes">
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
    data () {
      return {
        defaultClasses: this.$human.cssPrefix
      }
    }
  }
</script>
