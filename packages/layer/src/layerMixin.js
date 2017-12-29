export default {
  props: {
    /**
     * Control layer show or hide
     */
    visible: Boolean,
    /**
     * Set transition name
     */
    transition: String,
    /**
     * Define z-index
     */
    zIndex: {
      type: Number,
      default: 2000
    }
  },
  methods: {
    show () {
      /**
       * @event update:visible
       * @property {Boolean} visible - show visible
       */
      this.$emit('update:visible', true)
    },
    hide () {
      /**
       * @event update:visible
       * @property {Boolean} visible - hide visible
       */
      this.$emit('update:visible', false)
    }
  }
}
