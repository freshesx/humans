export default {
  props: {
    /**
     * 用于控制 MnPopup 是否打开显示
     */
    showPopup: Boolean
  },
  methods: {
    /**
     * Emit showPopup event
     *
     * @method emitShowPopup
     * @param  {Boolean}      val
     * @return {this}
     */
    emitShowPopup (val) {
      this.$emit('update:showPopup', val)
      return this
    },

    /**
     * 关闭 Popup 的指令
     *
     * @method close
     * @return {this}
     */
    close () {
      this.emitShowPopup(false)
      return this
    },

    /**
     * 打开 Popup 的指令
     *
     * @method close
     * @return {this}
     */
    show () {
      this.emitShowPopup(true)
      return this
    },

    /**
     * show 的别名
     *
     * @method open
     * @return {this}
     */
    open () {
      return this.show()
    }
  }
}
