import Human from '../../index'

export default {
  props: {
    mobile: {
      type: [String, Object]
    },
    tablet: {
      type: [String, Object]
    },
    desktop: {
      type: [String, Object]
    },
    widescreen: {
      type: [String, Object]
    }
  },
  data () {
    return {
      offsetWidth: 0
    }
  },
  computed: {
    /**
     * Adapted media query config
     *
     * @return {Object}
     */
    adaptedMediaConfig () {
      let screens = Human.$screens.filter(item => {
        return this.offsetWidth > item.min && typeof this[item.name] !== 'undefined'
      }).reverse()

      // 取结果集中的最后一个匹配值
      return screens.length > 0 ? this[screens[0].name] : {}
    },

    /**
     * Adapted media query's name
     *
     * @return {String}
     */
    adaptedMediaName () {
      let screens = Human.$screens.filter(item => {
        return this.offsetWidth > item.min
      }).reverse()

      return screens.length > 0 ? screens[0].name : 'mobile'
    }
  },
  methods: {
    setOffsetWidth () {
      this.offsetWidth = document.body.offsetWidth
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.setOffsetWidth()
      window.addEventListener('resize', this.setOffsetWidth)
    })
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.setOffsetWidth)
  }
}
