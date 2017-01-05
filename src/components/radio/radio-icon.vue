<template>
  <div :style="{ width: `${20 * scale}px` }">
    <mn-icon
      :class="[`${cssPrefix}form-radio-checkmark`, {
        'is-active': checked
      }]"
      :name="iconName"
      :svg="iconSvg"
      :scale="scale"
      v-if="isShow">
    </mn-icon>
  </div>
</template>

<script>
  import Icon from '../icon/icon'
  // import iconStorage from '../../util/icons'
  import checkmarkEmpty from './checkmark-empty.json'
  // import checkmarkOutline from './checkmark-outline.json'
  // import circleOutline from './circle-outline.json'

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
      },
      iconName () {
        if (typeof this.icon === 'string') {
          return this.icon
        }
      },
      iconSvg () {
        if (typeof this.icon === 'object') {
          return this.icon
        }
      }
    }
  }
</script>
