<template>
  <div :style="{ width: `${20 * scale}px` }">
    <mn-icon class="mn-radio-checkmark"
      :class="{ 'is-active': checked }"
      :name="icon"
      :scale="scale"
      v-if="isShow">
    </mn-icon>
  </div>
</template>

<script>
  import { icon } from '@humans/icon'
  import checkmarkIcon from 'vue-human-icons/js/ios/checkmark-empty'

  /**
   * The radio-icon component
   */
  export default {
    name: 'mn-radio-icon',
    components: Object.assign({}, icon),
    props: {
      /**
       * Active icon
       */
      active: {
        default: () => checkmarkIcon
      },
      /**
       * Unactive icon
       */
      unactive: null,
      /**
       * Icon scale
       */
      scale: {
        type: Number,
        default: 1.5
      },
      /**
       * Parent current data
       */
      data: null,
      /**
       * The input value
       */
      value: null
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
