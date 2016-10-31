<template>
  <button type="button" name="button" :class="classes">
    <mn-icon name="minus"></mn-icon>
  </button>
</template>

<script>
  export default {
    computed: {
      classes () {
        let classes = {}
        // basic class
        classes[`${this.$human.cssPrefix}quantity-reduce-button`] = true
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
