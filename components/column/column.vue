<template>
  <div class="mn-column" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
  import Element from '../../util/Element'
  import isString from 'lodash/isString'
  import isUndefined from 'lodash/isUndefined'
  import isPlainObject from 'lodash/isPlainObject'
  import Human from '../../index.js'

  export default new Element({
    name: 'mn-column',
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
      mediaQueries () {
        const screens = Human.$screens.map(item => item.name)
        return screens.map(screen => {
          if (!isUndefined(this[screen])) {
            return { name: screen, ...this.convertMediaQueries(this[screen]) }
          }
        })
      },

      classes () {
        const classes = []

        this.mediaQueries.forEach(config => {
          if (isUndefined(config)) return

          if (!isUndefined(config.span)) {
            classes.push([ `is-${config.name}-${config.span}` ])
          }
          if (!isUndefined(config.offset)) {
            classes.push([ `is-${config.name}-offset-${config.offset}` ])
          }
        })

        return classes
      }
    },
    methods: {
      /**
       * 将字符串或对象的值转化为对象格式
       * @protected
       * @param {String|Object} queries
       * @return {Object}
       */
      convertMediaQueries (queries) {
        if (isString(queries)) {
          const [span, offset, order] = queries.split(/,\s*/)
          return {
            span: this.parseString(span),
            offset: this.parseString(offset),
            order: this.parseString(order)
          }
        }

        if (isPlainObject(queries)) {
          return queries
        }

        return {}
      },

      parseString (value) {
        return !isUndefined(value) && value !== ''
          ? parseInt(value)
          : undefined
      }
    }
  })
</script>

<style lang="scss">
  @import "../../scss/vars";
  @import "../../scss/mixins/media";

  .mn-column {
    width: 100%;

    // When `mobile` media query, padding is 0, and use single column forcely.
    // When equal and more than `tablet` media query, padding is 0.5rem.
    @include min-screen(tablet) {
      padding: 0 $grid-gutters * 0.5;
    }

    @each $breakpoint in map-keys($grid-breakpoints) {
      @include min-screen($breakpoint) {
        @for $number from 1 through 12 {
          &.is-#{$breakpoint}-#{$number} {
            width: (100% / 12) * $number;
          }

          &.is-#{$breakpoint}-offset-#{$number} {
            margin-left: (100% / 12) * $number;
          }
        }
      }

      // When `mobile` media query, only use single column.
      @include max-screen('tablet') {
        @for $number from 1 through 12 {
          &.is-#{$breakpoint}-#{$number} {
            width: 100%;
          }

          &.is-#{$breakpoint}-offset-#{$number} {
            margin-left: 0;
          }
        }
      }
    }
  }
</style>
