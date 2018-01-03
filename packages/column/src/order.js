export default {
  data () {
    return {
      offsetWidth: 0
    }
  },
  computed: {
    adaptedConfig () {
      return this.mediaQueries.filter(item => {
        return this.offsetWidth > item.min
      }).reverse()[0]
    },

    orderStyle () {
      // @todo test the order
      const order = (this.adaptedConfig && this.adaptedConfig.order)
        ? this.adaptedConfig.order
        : undefined
      return { order }
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
