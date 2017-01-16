<template>
  <div :style="{ width: `${20 * scale}px` }">
    <mn-icon
      :class="[`${cssPrefix}form-radio-checkmark`, {
        'is-active': checked
      }]"
      :name="icon"
      :scale="scale"
      v-if="isShow">
    </mn-icon>
  </div>
</template>

<script>
  import Icon from '../icon/icon'
  import checkmarkEmpty from 'human-icons/js/ios/checkmark-empty'

  export default {
    components: {
      [Icon.name]: Icon
    },
    name: 'mn-radio-icon',
    props: {
      // when checked, show this icon.
      active: {
        type: [String, Object],
        default: () => checkmarkEmpty
      },
      // When unchecked, show this icon.
      // If the icon is empty, hide the icon.
      unactive: {
        type: [String, Object]
      },
      // Icon scale
      scale: {
        type: Number,
        default: 1.5
      },
      // Current data
      data: {
        required: true
      },
      // Model value
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
      },
      icon () {
        return this.checked
          ? this.active
          : this.unactive
      },
      isShow () {
        if (this.unactive) {
          return true
        }

        return this.checked
      }
    }
  }
</script>
