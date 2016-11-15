<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    computed: {
      classes () {
        let classes = {}
        classes[`${this.defaultClasses}slide-box-item`] = true
        return Object.assign({}, classes)
        // Add css prefix
      }
    },
    data () {
      return {
        defaultClasses: this.$human.cssPrefix
      }
    },
    mounted () {
      this.$el.style.maxWidth = this.$parent.maxWidth + 'px'
    }
  }
</script>
