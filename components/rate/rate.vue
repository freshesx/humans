<template>
  <span :class="classes">
    <i v-for="item in this.max">
      <mn-rate-item :index="item"></mn-rate-item>
    </i>
  </span>
</template>

<script>
  export default {
    props: {
      max: {
        type: Number,
        default: 5
      },
      default: {
        type: Number,
        default: 0
      }
    },
    data () {
      return {
        defaultClasses: this.$human.cssPrefix
      }
    },
    computed: {
      classes () {
        let classes = {}
        // basic class
        classes[`${this.$human.cssPrefix}rate`] = true
        // return default and now classes
        return Object.assign({}, classes)
      }
    }
  }
</script>
