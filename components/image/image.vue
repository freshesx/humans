<template>
  <div :class="[ `${cssPrefix}image`, { 'is-block': isBlock, [`is-${type}`]: type } ]">
    <span :class="[ `${cssPrefix}image-loading` ]" v-if="isLoading">
      <mn-loading-icon></mn-loading-icon>
    </span>
    <img :src="link" :alt="alt" :title="title" ref="image">
  </div>
</template>

<script>
  import { readyAndResize, windowWidth } from '../util/dom'
  import { isString } from 'lodash'

  export default {
    props: {
      options: {
        type: [Array, String],
        default: ''
        // [{ min: Number|Undefined, max: Number|Undefined, src: String }]
      },
      alt: {
        type: String,
        default: ''
      },
      title: {
        type: String,
        default: ''
      },
      // circle, rounded
      type: {
        type: String,
        default: false,
        validator: val => ['circle', 'rounded'].includes(val)
      }
    },
    computed: {
      cssPrefix () {
        return this.$human.cssPrefix
      }
    },
    methods: {
      getViewImage () {
        let image = ''
        const width = windowWidth()

        this.options.map((item, index) => {
          const max = item.max || 100000
          const min = item.min || 0

          if (width > min && width < max) {
            image = item
          }
        })

        return image
      },
      setViewLink () {
        this.link = isString(this.options)
          ? this.options
          : this.getViewImage().src
      },
      listenSize () {
        readyAndResize(() => {
          this.setViewLink()
        })
      },
      listenImageComplete () {
        let timer = setInterval(() => {
          if (this.$refs.image.complete) {
            clearInterval(timer)
            this.isLoading = false
          }
        }, 500)
      }
    },
    data () {
      return {
        link: '',
        isBlock: false,
        isLoading: true
      }
    },
    mounted () {
      this.listenSize()
      this.listenImageComplete()
    },
    destoryed () {
      // unbind window resize
    }
  }
</script>
