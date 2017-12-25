<template>
  <div :style="{ width: `${20 * scale}px` }">
    <mn-icon
      :class="['mn-radio-checkmark', {
        'is-active': checked
      }]"
      :name="icon"
      :scale="scale"
      v-if="isShow">
    </mn-icon>
  </div>
</template>

<script>
  import icon from '@humans/icon'
  import checkmarkIcon from 'vue-human-icons/js/ios/checkmark-empty'

  export default {
    name: 'mn-radio-icon',
    components: Object.assign({}, icon),
    props: {
      // when checked, show this icon.
      active: {
        type: [String, Object],
        default: () => checkmarkIcon
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
