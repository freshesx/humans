<template>
  <div :class="[`${cssPrefix}col`, queryClass]">
    <slot></slot>
  </div>
</template>

<script>
  import lodash from 'lodash'

  const MEDIA_KEYWORDS = ['span', 'offset', 'order']

  export default {
    name: 'mn-col',
    props: {
      mobile: {
        type: [String, Object]
      },
      tablet: {
        type: [String, Object]
      },
      desktop: {
        type: [String, Object]
      },
      widescreen: {
        type: [String, Object]
      }
    },
    computed: {
      cssPrefix () {
        return this.$human.cssPrefix
      },
      computedMedia () {
        // const classes = []
        let media = {
          ...this.mobile ? { mobile: this.mobile } : undefined,
          ...this.tablet ? { tablet: this.tablet } : undefined,
          ...this.desktop ? { desktop: this.desktop } : undefined,
          ...this.widescreen ? { widescreen: this.widescreen } : undefined
        }

        lodash.forIn(media, (value, key) => {
          // const [span, offset] = lodash.split(value, /,+\s*/)
          // if (span) classes.push({ [`is-${key}-${span}`]: true })
          // if (offset) classes.push({ [`is-${key}-offset-${offset}`]: true })
          let queries = {}

          // 将 `,` 和 `空格` 的字符串分解为数组
          lodash.split(value, /,+\s*/).forEach((item, index) => {
            queries[MEDIA_KEYWORDS[index]] = item
          })

          media[key] = queries
        })

        return media
      },
      queryClass () {
        let classes = []
        let media = this.computedMedia

        lodash.forIn(media, (mediaValue, mediaName) => {
          lodash.forIn(mediaValue, (value, name) => {
            if (name === 'span') classes.push({ [`is-${mediaName}-${value}`]: true })
            if (name === 'offset') classes.push({ [`is-${mediaName}-offset-${value}`]: true })
          })
        })

        console.log(classes)
        return classes
      }
    },
    mounted () {
      console.log(this.computedMedia)
    }
  }
</script>
