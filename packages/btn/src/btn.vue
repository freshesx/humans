<template>
  <button
    class="mn-btn"
    :class="classes"
    :title="title"
    :name="name"
    @click="click">
    <mn-icon :name="icon" :loading="loading" v-if="icon || loading"></mn-icon>
    <!-- Button text contents -->
    <slot></slot>
  </button>
</template>

<script>
  import { icon } from '@humans/icon'

  /**
   * Button component
   */
  export default {
    name: 'mn-btn',
    components: Object.assign({}, icon),
    props: {
      /**
       * Button name
       */
      name: String,
      /**
       * Button title
       */
      title: String,
      /**
       * Button icon
       */
      icon: {
        type: null
      },
      /**
       * Button theme name
       */
      theme: String,
      /**
       * Button size, bulit-in: 'sm'
       */
      size: String,
      /**
       * Disabled button
       */
      disabled: Boolean,
      /**
       * Active button
       */
      active: Boolean,
      /**
       * Block layout button
       */
      block: Boolean,
      /**
       * Circle button
       */
      circle: Boolean,
      /**
       * Button has bottom margin
       */
      margin: Boolean
    },
    data () {
      return {
        loading: false
      }
    },
    computed: {
      classes () {
        return {
          [`is-${this.theme}`]: !!this.theme,
          [`is-${this.size}`]: !!this.size,
          'is-block': this.block,
          'is-disabled': this.disabled || this.loading,
          'is-active': this.active,
          'is-circle': this.circle,
          'is-margin-bottom': this.margin
        }
      }
    },
    methods: {
      click (event) {
        // 1. If loading, prevent
        if (this.loading) {
          event.preventDefault()
          event.stopPropagation()
          this.emitLoading(event)
          return
        }

        // 2. If disabled, $emit error event
        if (this.disabled) {
          event.preventDefault()
          event.stopPropagation()
          this.emitError(event)
          return
        }

        // 3. Default emit click event
        this.emitClick(event)
      },
      emitClick (event) {
        /**
         * It will emit when the button is enable to click.
         * If the button has loading or disabled status, it can't emit anything.
         * @event click
         * @property {Event}  - DOM Event
         * @property {this}   - Button self
         */
        this.$emit('click', event, this)
      },
      emitError (event) {
        /**
         * If the button has disabled status, it will emit error event.
         * @event error
         * @property {Event}  - DOM Event
         * @property {this}   - Button self
         */
        this.$emit('error', event, this)
      },
      emitLoading (event) {
        /**
         * If the button has loading status, it will emit loading event.
         * @event loading
         * @property {Event}  - DOM Event
         * @property {this}   - Button self
         */
        this.$emit('loading', event, this)
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
