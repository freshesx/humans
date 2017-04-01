<template>
  <div class="mn-col" :class="classes" :style="styles">
    <slot></slot>
  </div>
</template>

<script>
  import Element from '../../util/element'
  import forIn from 'lodash/forIn'
  import isString from 'lodash/isString'
  import isInteger from 'lodash/isInteger'
  import isPlainObject from 'lodash/isPlainObject'

  const MEDIA_KEYWORDS = ['span', 'offset', 'order']

  export default new Element({
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
      computedMedia () {
        // const classes = []
        let media = {
          ...this.mobile ? { mobile: this.mobile } : undefined,
          ...this.tablet ? { tablet: this.tablet } : undefined,
          ...this.desktop ? { desktop: this.desktop } : undefined,
          ...this.widescreen ? { widescreen: this.widescreen } : undefined
        }

        forIn(media, (value, key) => {
          let queries = {}

          if (isString(value)) {
            // 字符串情况，将 `,` 和 `空格` 的字符串分解为数组
            value.split(/,\s*/).forEach((item, index) => {
              // 如果字符为数字的话，则表达其为 order
              if (isString(item) && item.length > 0 && isInteger(Number(item))) {
                queries[MEDIA_KEYWORDS[2]] = Number(item)
              } else {
                queries[MEDIA_KEYWORDS[index]] = item
              }
            })
          } else if (isPlainObject(value)) {
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

        forIn(media, (mediaValue, mediaName) => {
          forIn(mediaValue, (value, name) => {
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
    },
    created () {
      console && console.warn('建议使用全新 MnColumn 组件取代 MnCol。')
    }
  })
</script>

<style lang="scss">
  @import "../../scss/vars";
  @import "../../scss/mixins/media";
  @import "../../scss/mixins/number";

  .mn-col {
    width: 100%;
    // overflow: hidden;  Remove it for card narrow
    padding: 0 $grid-gutters * 0.5;

    @include min-screen(sm) {
      flex: 1;
    }

    // Column span and offset
    // @divice(mobile, tablet, desktop, widescreen)
    //
    @each $breakpoint in map-keys($grid-breakpoints) {
      @include min-screen($breakpoint) {
        @for $number from 1 through 12 {
          &.is-#{$breakpoint}-#{getLetterByNumber($number)} {
            flex: none;
            width: (100% / 12) * $number;
          }

          &.is-#{$breakpoint}-offset-#{getLetterByNumber($number)} {
            margin-left: (100% / 12) * $number;
          }
        }
      }
    }
  }
</style>
