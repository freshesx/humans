<template>
  <div class="mn-image" :style="{ height: height }">
    <img
      ref="image"
      class="mn-image-source"
      :class="{ [`is-${type}`]: !!type, 'is-hide': loading && loadingMask && hideImageWhenLoading }"
      :src="source.src"
      :title="title"
      :alt="alt">
    <!-- <div class="mn-image-mask" v-if="loading && loadingMask" :style="{ background: maskBg }">
      <loading-icon></loading-icon>
    </div> -->
  </div>
</template>

<script>
  import Element from '../../utils/Element'
  import Human from '../../index.js'

  const MEDIA_VALUE = {}

  Human.$screens.forEach((screen, index) => {
    const min = screen.min
    const max = index + 1 < Human.$screens.length
      ? Human.$screens[index + 1].min - 1
      : 9999
    MEDIA_VALUE[screen.name] = [min, max]
  })

  export default new Element({
    name: 'mn-image',
    props: {
      srcset: {
        type: [Array, Object]
      },
      alt: String,
      title: String,
      type: {
        type: String,
        validator: val => ['rounded', 'circle'].includes(val)
      },
      maskBg: {
        type: String,
        default: 'rgba(0, 0, 0, 0.8)'
      },
      // 是否显示 loading 加载的状态
      loadingMask: {
        type: Boolean,
        default: true
      },
      // 是否在未加载成功前不显示图片
      hideImageWhenLoading: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        offsetWidth: 0,
        loading: false
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
      height () {
        // 不预先设定尺寸
        if (typeof this.source.scale !== 'undefined' && this.offsetWidth && this.$el) {
          return `${this.$el.offsetWidth / this.source.scale}px`
        }
      }
    },
    watch: {
      offsetWidth () {
        this.loading = true
      },
      loading (newValue) {
        if (newValue === true) {
          if (this.$refs.image.complete) {
            this.loading = false
          } else {
            this.$refs.image.addEventListener('load', () => {
              this.loading = false
            })
            this.$refs.image.addEventListener('error', () => {
              console && console.warn('图片加载失败。')
            })
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
  @import "../../scss/mixins/media.scss";
  @import "./vars";

  .mn-image {
    // position: relative;
    width: 100%;
  }

  .mn-image-source {
    display: block;
    width: 100%;

    &.is-rounded {
      border-radius: $mn-image-mobile-radius;

      @include min-screen('desktop') {
        border-radius: $mn-image-desktop-radius;
      }
    }

    &.is-circle {
      border-radius: 50% 50%;
    }

    &.is-hide {
      display: none;
    }
  }

  .mn-image-mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
  }
</style>
