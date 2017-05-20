export default {
  props: {
    /**
     * 用于控制 MnPopup 是否打开显示
     */
    isShow: Boolean
  },
  methods: {
    /**
     * Emit showPopup event
     *
     * @method emitIsShow
     * @param  {Boolean}      val
     * @return {this}
     */
    emitIsShow (val) {
      this.$emit('update:isShow', val)
      return this
    },

    /**
     * 关闭 Popup 的指令
     *
     * @method close
     * @return {this}
     */
    close () {
      this.emitIsShow(false)
      return this
    },

    /**
     * 打开 Popup 的指令
     *
     * @method close
     * @return {this}
     */
    show () {
      this.emitIsShow(true)
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
