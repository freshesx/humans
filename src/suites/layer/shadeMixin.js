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
      visible
        ? this.shade = this.createShadeLayer().show()
        : this.shade.destroy()
    }
  },
  methods: {
    createShadeLayer () {
      // 控制 shade element 的 zIndex 减少一层
      const zIndex = this.zIndex - 1

      // 合并 shade propsData
      const shade = Shade.create({ zIndex, ...this.shadePropsData })

      // 监听
      shade.vm.$on('update:visible', visible => {
        if (!visible) this.whenShadeCallHiding(shade)
      })

      return shade
    },
    /**
     * 当 shade 请求隐藏的时候执行相应的方法
     * @method shadeCallHiding
     * @public
     * @param  {Shade}      shade - shade layer
     * @return {undefined}
     */
    whenShadeCallHiding (shade) {}
  }
}
