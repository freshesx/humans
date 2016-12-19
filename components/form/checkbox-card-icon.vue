<template>
  <mn-icon
    :class="[`${cssPrefix}form-checkbox-checkmark`, {
      'is-active': checked
    }]"
    :name="icon"
    :scale="1.5">
  </mn-icon>
</template>

<script>
  export default {
    props: {
      normalIcon: {
        type: String,
        default: 'ios-circle-outline'
      },
      activeIcon: {
        type: String,
        default: 'ios-checkmark-outline'
      },
      scale: {
        type: Number,
        default: 1.5
      },
      checked: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      cssPrefix () {
        return this.$human.cssPrefix
      },
      icon () {
        return this.checked
          ? this.activeIcon
          : this.normalIcon
      }
    }
  }
</script>
