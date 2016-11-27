<template>
  <div :class="[ `${cssPrefix}image`, { 'is-block': isBlock } ]">
    <span :class="[ `${cssPrefix}image-loading` ]" v-if="isBlock">
      <mn-loading-icon></mn-loading-icon>
    </span>
    <img :src="link" :alt="alt" :title="title">
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
      }
    },
    data () {
      return {
        link: '',
        isBlock: false
      }
    },
    mounted () {
      readyAndResize(() => {
        this.setViewLink()
      })
    },
    destoryed () {
      // unbind window resize
    }
  }
</script>
