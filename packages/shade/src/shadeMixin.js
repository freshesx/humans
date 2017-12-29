import Shade from './Shade.js'

export default {
  props: {
    /**
     * Show or hide specify layer
     */
    visible: Boolean,
    /**
     * Pass shade propsData from specify layer
     * @type {[type]}
     */
    shadePropsData: Object,
    /**
     * Set shade layer z-index
     */
    zIndex: {
      type: Number,
      default: 2000
    }
  },
  data () {
    return {
      // Store shade layer object
      shade: undefined
    }
  },
  watch: {
    // Watch visible, if true, then create shade layer and show,
    // if false, destroy shade.
    visible (visible) {
      visible
        ? this.shade = this.createShadeLayer().show()
        : this.shade.destroy()
    }
  },
  methods: {
    createShadeLayer () {
      // Let shade's z-index is less than specify layer
      const zIndex = this.zIndex - 1

      // Pass shade propsData
      const shade = Shade.create(Object.assign(
        {}, { zIndex }, this.shadePropsData
      ))

      // Listen shade visible, if click shade to close, and close specify layer.
      shade.vm.$on('update:visible', visible => {
        if (!visible) this.whenShadeCallHiding(shade)
      })

      return shade
    },
    /**
     * When shade need to hide, the specify can use this method to close self.
     * @public
     * @param  {Shade}      shade - shade layer
     * @return {undefined}
     */
    whenShadeCallHiding (shade) {}
  }
}
