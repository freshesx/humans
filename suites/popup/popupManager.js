export default {
  props: {
    show: Boolean
  },
  methods: {
    /**
     * Set isShow to false, and emit close event.
     *
     * @return {this}
     */
    close () {
      this.$emit('update:show', false)
      return this
    },

    /**
     * Set isShow to true, and emit show event.
     *
     * @return {this}
     */
    open () {
      this.$emit('update:show', true)
      return this
    }
  }
}
