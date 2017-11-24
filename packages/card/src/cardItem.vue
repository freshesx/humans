<template>
  <div
    class="mn-card-item"
    :class="{
      [`is-${type}`]: !!type,
      'is-focus': focus,
      'is-disabled': disabled
    }"
    @click="click">
    <!-- Card item contents -->
    <slot></slot>
  </div>
</template>

<script>
  /**
   * Card item component
   */
  export default {
    name: 'mn-card-item',
    props: {
      /**
       * Line item type,
       * 'link' means having right arrow and pointer cursor status.
       * 'arrow' means only having right arrow.
       * 'cursor' means only having pointer cursor status.
       */
      type: {
        type: String,
        validator: val => ['link', 'arrow', 'cursor'].includes(val)
      },
      /**
       * Disable click event, and add disabled style
       */
      disabled: Boolean
    },
    data () {
      return {
        /**
         * Save focus status for click event
         */
        focus: false
      }
    },
    methods: {
      click (event) {
        /**
         * Click event
         * @event click
         * @property {Event} event - DOM Event
         * @property {this} cardItem - cardItem self
         */
        this.$emit('click', event, this)

        // Add click focus animation
        if (this.type) {
          this.focus = true
          setTimeout(() => {
            this.focus = false
          }, 150)
        }
      }
    }
  }
</script>
