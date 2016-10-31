<template>
  <button type="button" name="button" :class="classes">
    <mn-icon name="plus"></mn-icon>
  </button>
</template>

<script>
  export default {
    computed: {
      classes () {
        let classes = {}
        // basic class
        classes[`${this.$human.cssPrefix}quantity-increase-button`] = true
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
