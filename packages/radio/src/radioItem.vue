<template>
  <mn-card-item type="cursor" :disabled="disabled" @click="click">
    <!-- show radio item contents -->
    <slot></slot>
  </mn-card-item>
</template>

<script>
  import { card } from '@humans/card'

  /**
   * The radio-item component, like card-item
   */
  export default {
    name: 'mn-radio-item',
    components: Object.assign({}, card),
    props: {
      /**
       * The input value
       */
      value: null,
      /**
       * The parent current value
       */
      data: null,
      /**
       * Disable
       */
      disabled: Boolean
    },
    methods: {
      click () {
        if (!this.disabled) {
          /**
           * @event input
           * @property {*} data - the output data
           */
          this.$emit('input', this.data)
        }
      }
    }
  }
</script>
