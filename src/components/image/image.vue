<template>
  <img :src="link" :alt="alt" :title="title">
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
        link: ''
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
