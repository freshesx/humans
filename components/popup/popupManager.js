export default {
  data () {
    return {
      /**
       * Control the component is show or hide
       */
      isShow: false
    }
  },
  methods: {
    /**
     * Set isShow to false, and emit close event.
     *
     * @return {this}
     */
    close () {
      this.isShow = false
      this.$emit('close')
      return this
    },

    /**
     * Set isShow to true, and emit show event.
     *
     * @return {this}
     */
    show () {
      this.isShow = true
      this.$emit('show')
      return this
    }
  }
}
