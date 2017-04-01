<template>
  <div class="mn-col" :class="classes" :style="styles">
    <slot></slot>
  </div>
</template>

<script>
  import Element from '../../util/element'
  import isString from 'lodash/isString'
  import isInteger from 'lodash/isInteger'
  import isPlainObject from 'lodash/isPlainObject'

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
      queries () {
        const classes = []
        const styles = []
        const mediasName = ['mobile', 'tablet', 'desktop', 'widescreen']

        mediasName.forEach(name => {
          if (typeof this[name] === 'undefined') return

          const media = this.convertMediaQueries(this[name])

          Object.keys(media).forEach(tag => {
            const value = media[tag]
            if (tag === 'span') classes.push([ `is-${name}-${value}` ])
            if (tag === 'offset') classes.push([ `is-${name}-offset-${value}` ])
            if (tag === 'order') styles.push({ order: value })
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
          return this.convertStringMediaQueries(queries)
        } else if (isPlainObject(queries)) {
          return queries
        } else {
          return {}
        }
      },
      convertStringMediaQueries (queries) {
        // 允许 x, x 或 x,x
        const splitReg = /,\s*/
        const computedQueries = {}
        const MEDIA_KEYWORDS = ['span', 'offset', 'order']

        // @case 1: 'three, three, 1'
        // @case 2: 'three, 2'
        // @case 3: '2'
        // 将字符串拆解并遍历
        // 如果 value 为字符串格式的数字，如 '2'，则优先转化为相对应 order 值
        // 否则使用默认情况对应 MEDIA_KEYWORDS
        queries.split(splitReg).forEach((value, index) => {
          if (isString(value) && value.length > 0 && isInteger(Number(value))) {
            computedQueries['order'] = Number(value)
          } else {
            computedQueries[MEDIA_KEYWORDS[index]] = value
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
