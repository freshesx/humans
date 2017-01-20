<template>
  <div :class="[`${cssPrefix}col`, classes]" :style="styles">
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
          let queries = {}

          if (lodash.isString(value)) {
            // 字符串情况，将 `,` 和 `空格` 的字符串分解为数组
            value.split(/,\s*/).forEach((item, index) => {
              // 如果字符为数字的话，则表达其为 order
              if (lodash.isString(item) && item.length > 0 && lodash.isInteger(Number(item))) {
                queries[MEDIA_KEYWORDS[2]] = Number(item)
              } else {
                queries[MEDIA_KEYWORDS[index]] = item
              }
            })
          } else if (lodash.isPlainObject(value)) {
            // 对象情况
            queries = value
          }

          media[key] = queries
        })

        return media
      },
      queries () {
        let classes = []
        let styles = []
        let media = this.computedMedia

        lodash.forIn(media, (mediaValue, mediaName) => {
          lodash.forIn(mediaValue, (value, name) => {
            if (name === 'span') classes.push({ [`is-${mediaName}-${value}`]: true })
            if (name === 'offset') classes.push({ [`is-${mediaName}-offset-${value}`]: true })
            if (name === 'order') styles.push({ order: value })
          })
        })

        return { classes, styles }
      },
      classes () {
        return this.queries.classes
      },
      styles () {
        return this.queries.styles
      }
    }
  }
</script>
