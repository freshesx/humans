<template>
  <mn-icon
    :class="[`${cssPrefix}form-radio-checkmark`]"
    :name="icon"
    :scale="scale"
    v-if="checked">
  </mn-icon>
</template>

<script>
  export default {
    props: {
      icon: {
        type: String,
        default: 'ios-checkmark-empty'
      },
      scale: {
        type: Number,
        default: 2
      },
      checked: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      cssPrefix () {
        return this.$human.cssPrefix
      }
    }
  }
</script>
