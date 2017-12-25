<template>
  <div class="mn-radio-tag"
    :class="{ 'is-active': checked }"
    @click="click"
  >
    <!-- show radio tag label -->
    <slot>placeholder</slot>
  </div>
</template>

<script>
  /**
   * The radio-tag component
   */
  export default {
    name: 'mn-radio-tag',
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
    computed: {
      checked () {
        return this.data === this.value
      }
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
