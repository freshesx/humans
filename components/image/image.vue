<template>
  <div class="mn-image" :style="style">
    <img :src="source.src" :title="title" :alt="alt" class="mn-image-source">
  </div>
</template>

<script>
  import Element from '../../util/element'

  const MEDIA_VALUE = {
    mobile: [0, 767],
    tablet: [768, 991],
    desktop: [992, 1199],
    widescreen: [1200, 9999]
  }

  export default new Element({
    name: 'mn-image',
    props: {
      srcset: {
        type: [Array, Object]
      },
      alt: String,
      title: String
    },
    data () {
      return {
        offsetWidth: 0
      }
    },
    computed: {
      sources () {
        // 对象转化为数组
        let sources = this.srcset
        if (!Array.isArray(sources)) sources = [sources]

        // 添加 min 和 max
        sources.forEach(source => {
          if (source.query && Object.keys(MEDIA_VALUE).includes(source.query)) {
            source.min = MEDIA_VALUE[source.query][0]
            source.max = MEDIA_VALUE[source.query][1]
          }
          source.min = source.min || 0
          source.max = source.max || 9999
        })

        return sources
      },
      source () {
        let sources = this.sources.filter(source => {
          return this.offsetWidth >= source.min &&
            this.offsetWidth < source.max
        })

        if (sources.length > 0) return sources[0]

        console && console.warn(`未找到匹配的 source。offsetWidth 为 ${this.offsetWidth}`)
        return this.sources[0]
      },
      style () {
        if (typeof this.source.scale === 'undefined') return false
        if (this.$el) {
          console.log(this.$el)
          return {
            width: `${this.$el.offsetWidth}px`,
            height: `${this.$el.offsetWidth / this.source.scale}px`
          }
        }
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
  })
</script>

<style lang="scss">
  .mn-image-source {
    display: block;
    width: 100%;
  }
</style>
