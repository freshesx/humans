import Mask from '../../utils/Mask'

export default {
  props: {
    /**
     * Whether to use mask component
     */
    masked: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    closePopup () {
      console.warn('没有定义 closePopup 方法')
    },

    /**
     * If masked is true, create and append mask component,
     * and listen mask `notifyCloseMask` event.
     *
     * @param {Number} zIndex
     * @return {this}
     */
    showMask (zIndex) {
      if (this.masked) {
        // Create mask with z-index
        this.mask = Mask.create({ zIndex }).show()

        // Only listen mask notifyCloseMask event
        this.mask.$on('notifyCloseMask', () => {
          this.closePopup()
        })
      }

      return this
    },

    /**
     * Excute to close mask
     * @return {this}
     */
    closeMask () {
      if (this.mask) {
        this.mask.close()
        this.mask = undefined
      }

      return this
    }
  }
}
