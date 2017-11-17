export default {
  props: {
    visible: Boolean,
    transition: String,
    zIndex: {
      type: Number,
      default: 2000
    }
  },
  methods: {
    /**
     * 触发显示的事件请求
     * @method show
     * @return {undefined}
     */
    show () {
      this.$emit('update:visible', true)
    },

    /**
     * 触发隐藏的事件请求
     * @method hide
     * @return {undefined}
     */
    hide () {
      this.$emit('update:visible', false)
    }
  }
}
