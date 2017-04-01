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
        const medias = {}
        const mediasName = ['mobile', 'tablet', 'desktop', 'widescreen']

        mediasName.forEach(name => {
          // 为空不处理
          if (typeof this[name] === 'undefined') return
          medias[name] = this.convertMediaQueries(this[name])
        })

        return medias
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
    methods: {
      convertMediaQueries (queries) {
        if (isString(queries)) {
          // 字符串
          return this.convertStringMediaQueries(queries)
        } else if (isPlainObject(queries)) {
          // 对象
          return queries
        }
        console && console.warn('Col 组件传递的 props 参数不正确。')
      },
      convertStringMediaQueries (queries) {
        // 允许 x, x 或 x,x
        const splitReg = /,\s*/
        const computedQueries = {}

        queries.split(splitReg).forEach((item, index) => {
          if (isString(item) && item.length > 0 && isInteger(Number(item))) {
            // 如果字符为数字的话，则表达其为 order
            computedQueries[MEDIA_KEYWORDS[2]] = Number(item)
          } else {
            // 默认情况
            computedQueries[MEDIA_KEYWORDS[index]] = item
          }
        })

        return computedQueries
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
