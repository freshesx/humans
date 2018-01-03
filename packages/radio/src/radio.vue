<template>
  <label class="mn-radio-label" @click="click">
    <mn-icon class="mn-radio-checkmark"
      :class="{ 'is-active': checked }"
      :name="icon"
    ></mn-icon>
    <span v-if="$slots.default">
      <!-- show radio label -->
      <slot>placeholder</slot>
    </span>
  </label>
</template>

<script>
  import { icon } from '@humans/icon'
  import activeIcon from 'vue-human-icons/js/ios/circle-filled'
  import unactiveIcon from 'vue-human-icons/js/ios/circle-outline'

  /**
   * Radio component
   */
  export default {
    name: 'mn-radio',
    components: Object.assign({}, icon),
    props: {
      /**
       * Input value
       */
      value: null,
      /**
       * Expected equal data
       */
      data: null,
      /**
       * Disable
       */
      disabled: Boolean,
      /**
       * Active icon
       */
      active: {
        default: () => activeIcon
      },
      /**
       * Unactive icon
       */
      unactive: {
        default: () => unactiveIcon
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
      }
    },
    methods: {
      click () {
        if (!this.disabled) {
          /**
           * @event input
           * @property {*} newValue - the output value
           */
          this.$emit('input', this.data)
        }
      }
    }
  }
</script>
