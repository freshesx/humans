import get from 'lodash/get'

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
      return { order: get(this, 'adaptedConfig.order') }
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
