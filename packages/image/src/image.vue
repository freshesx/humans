<document>
  不建议采用绝对相关定位，当图片多时非常影响性能
</document>

<template>
  <div class="mn-image">
    <div class="mn-image-holder"
      :class="{ 'is-active': !showSource }"
      :style="{
        'padding-bottom': `${ratio * 100}%`,
        'background-image': `url(${thumb})`
      }"></div>
    <img class="mn-image-source"
      :class="{
        'is-active': showSource,
        [`is-${type}`]: !!type
      }"
      :src="source"
      ref="source">
  </div>
</template>

<script>
  export default {
    name: 'mn-image',
    props: {
      title: String,
      alt: String,
      // 缩略图地址
      thumb: String,
      // 原图地址
      source: String,
      // ratio 表示的宽高比，如宽 200px，宽 100px，则 ratio 为 0.5
      ratio: {
        type: Number,
        default: 1
      },
      // type 起到修饰图片的作用，rounded 表示圆角图片，circle 表示圆形图片
      type: {
        type: String,
        validator: val => ['rounded', 'circle'].includes(val)
      }
    },
    data () {
      return {
        showSource: false
      }
    },
    methods: {
      observerSource () {
        if (!this.source) return

        if (this.$refs.source.complete) {
          this.showSource = true
        } else {
          this.$refs.source.addEventListener('load', () => {
            this.showSource = true
          })
        }
      }
    },
    mounted () {
      this.$nextTick(() => {
        this.observerSource()
      })
    }
  }
</script>
