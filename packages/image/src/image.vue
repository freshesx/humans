<template>
  <!--
    Can't use relative position.
    When there are too much images, the performance is very poor.
  -->
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
  /**
   * The image component
   */
  export default {
    name: 'mn-image',
    props: {
      /**
       * image title
       */
      title: String,
      /**
       * image alt
       */
      alt: String,
      /**
       * image thumb
       * if can't set thumb, it will use gray background.
       */
      thumb: String,
      /**
       * real image source
       */
      source: String,
      /**
       * image ratio, if width is 200px, and height is 100px,
       * then the ratio should be 0.5.
       */
      ratio: {
        type: Number,
        default: 1
      },
      /**
       * rounded or circle type
       */
      type: {
        type: String,
        validator: val => ['rounded', 'circle'].indexOf(val) > -1
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
          this.showSource()
        } else {
          this.$refs.source.addEventListener('load', this.showSource)
        }
      },
      showSource () {
        this.showSource = true
      }
    },
    mounted () {
      this.observerSource()
    },
    beforeDestroy () {
      this.$refs.source.removeEventListener('load', this.showSource)
    }
  }
</script>
