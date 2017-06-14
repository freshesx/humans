import Shade from '../../utils/Shade'

export default {
  props: {
    visible: Boolean,
    shadePropsData: Object,
    zIndex: {
      type: Number,
      default: 2000
    }
  },
  data () {
    return {
      /**
       * 存储 shade layer 对象
       * @type {Layer}
       */
      shade: undefined
    }
  },
  watch: {
    /**
     * 监听 visible 的变化
     * @method visible
     * @private
     * @param  {boolean} visible
     * @return {undefined}
     */
    visible (visible) {
      visible ? this.shade.show() : this.shade.destroy()
    }
  },
  methods: {
    /**
     * 当 shade 请求隐藏的时候执行相应的方法
     * @method shadeCallHiding
     * @public
     * @param  {Shade}      shade - shade layer
     * @return {undefined}
     */
    whenShadeCallHiding (shade) {}
  },
  /**
   * 创建 Shade Layer 对象，并监听 update:visible 事件
   * @method created
   * @private
   * @return {undefined}
   */
  created () {
    this.shade = Shade.create({ zIndex: this.zIndex - 1, ...this.shadePropsData })
    this.shade.vm.$on('update:visible', visible => {
      if (!visible) this.whenShadeCallHiding(this.shade)
    })
  }
}
