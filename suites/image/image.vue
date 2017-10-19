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
  import Element from '../../utils/Element'

  export default new Element({
    name: 'mn-image',
    props: {
      thumb: String,
      source: String,
      ratio: {
        type: Number,
        default: 1
      },
      alt: String,
      title: String,
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
    mounted () {
      this.$nextTick(() => {
        if (this.$refs.source.complete) {
          this.showSource = true
        } else {
          this.$refs.source.addEventListener('load', () => {
            this.showSource = true
          })
        }
      })
    }
  })
</script>

<style lang="scss">
  @import "../../scss/mixins/media.scss";
  @import "./vars";

  .mn-image {
  }

  .mn-image-holder {
    display: none;
    width: 100%;
    background-color: #ddd;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    filter: blur(50px);

    &.is-active {
      display: block;
    }
  }

  .mn-image-source {
    display: none;
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

    &.is-active {
      display: block;
    }
  }
</style>
