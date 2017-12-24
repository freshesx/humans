<template>
  <form class="mn-form" @submit.prevent="submit" novalidate>
    <!-- show form contents -->
    <slot></slot>
  </form>
</template>

<script>
  /**
   * Form component
   */
  export default {
    name: 'mn-form',
    props: {
      /**
       * validate Object, you can set this value through Vuelidate.
       * If the value is undefined, the form will not check validation.
       * @see https://github.com/monterail/vuelidate
       */
      validate: Object
    },
    data () {
      return {
        loading: false
      }
    },
    methods: {
      submit (event) {
        // If the form is loading, disable submit.
        if (this.loading) return

        // If validate prop is undefined, then return success.
        if (!this.validate) {
          this.emitSuccess()
          return
        }

        // Touch validate prop by vuelidate.
        this.validate.$touch()

        // Check invalid
        if (!this.validate.$invalid) {
          this.emitSuccess(event)
        } else {
          this.emitError(event)
        }
      },
      emitSuccess (event) {
        /**
         * Submit success event,
         * suggest to use `success` event.
         * @event submit
         * @property {Event} event - DOM Event
         * @property {this} form - form self
         * @property {Boolean} success - success
         */
        this.$emit('submit', event, this, true)

        /**
         * Success submit event
         * @event success
         * @property {Event} event - DOM Event
         * @property {this} form - form self
         */
        this.$emit('success', event, this)
      },
      emitError (event) {
        /**
         * Submit error event,
         * suggest to use `error` event.
         * @event submit
         * @property {Event} event - DOM Event
         * @property {this} form - form self
         * @property {Boolean} error - error
         */
        this.$emit('submit', event, this, false)

        /**
         * Error submit event
         * @event error
         * @property {Event} event - DOM Event
         * @property {this} form - form self
         */
        this.$emit('error', event, this)
      },
      /**
       * Start loading status
       * @public
       * @return {this}     - Button self
       */
      start () {
        this.loading = true
        return this
      },
      /**
       * Finish loading status
       * @public
       * @return {this}     - Button self
       */
      finish () {
        this.loading = false
        return this
      }
    }
  }
</script>
