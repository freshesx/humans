<template>
  <div :style="{ width: `${20 * scale}px` }">
    <mn-icon
      :class="[`${cssPrefix}form-radio-checkmark`]"
      :name="icon"
      :scale="scale"
      v-if="checked">
    </mn-icon>
  </div>
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
        default: 1.5
      },
      data: {
        required: true
      },
      value: {
        required: true
      }
    },
    computed: {
      cssPrefix () {
        return this.$human.cssPrefix
      },
      checked () {
        return this.data === this.value
      }
    }
  }
</script>
