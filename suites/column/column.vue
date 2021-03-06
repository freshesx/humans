<template>
  <div class="mn-column" :class="[ widthClass ]" :style="[ orderStyle ]">
    <slot></slot>
  </div>
</template>

<script>
  import Element from '../../utils/Element'
  import isString from 'lodash/isString'
  import isUndefined from 'lodash/isUndefined'
  import isPlainObject from 'lodash/isPlainObject'
  import order from './order'
  import Human from '../../index.js'

  export default new Element({
    name: 'mn-column',
    mixins: [ order ],
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
      /**
       * Media queries config
       *
       * @return {Array}
       */
      mediaQueries () {
        const configOfScreens = Human.$screens.map(screen => {
          if (!isUndefined(this[screen.name])) {
            return { ...screen, ...this.parseConfig(this[screen.name]) }
          }
        })

        return configOfScreens.filter(item => !isUndefined(item))
      },

      /**
       * Computed class
       *
       * @return {Array}
       */
      widthClass () {
        const classes = []

        this.mediaQueries.forEach(config => {
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
       * Parse media query config
       * @protected
       *
       * @param {String|Object} query
       * @return {Object}
       */
      parseConfig (query) {
        if (isString(query)) {
          const [span, offset, order] = query.split(/,\s*/)
          return {
            span: this.parseString(span),
            offset: this.parseString(offset),
            order: this.parseString(order)
          }
        }

        if (isPlainObject(query)) {
          return query
        }

        return {}
      },

      /**
       * Parse string to number
       * @private
       *
       * @param  {String|undefined}    value
       * @return {Number|undefined}
       */
      parseString (value) {
        return !isUndefined(value) && value !== ''
          ? parseInt(value)
          : undefined
      }
    }
  })
</script>

<style lang="scss">
  @import "../../scss/mixins/media";
  @import "./vars";

  .mn-column {
    width: 100%;

    // When `mobile` media query, padding is 0, and use single column forcely.
    // When equal and more than `tablet` media query, padding is 0.5rem.
    @include min-screen(tablet) {
      padding: 0 $mn-column-grid-gutters * 0.5;
    }

    @each $-breakpoint in map-keys($mn-column-grid-breakpoints) {
      @include min-screen($-breakpoint) {
        @for $-number from 1 through 12 {
          &.is-#{$-breakpoint}-#{$-number} {
            width: (100% / 12) * $-number;
          }

          &.is-#{$-breakpoint}-offset-#{$-number} {
            margin-left: (100% / 12) * $-number;
          }
        }
      }

      // When `mobile` media query, only use single column.
      @include max-screen('tablet') {
        @for $-number from 1 through 12 {
          &.is-#{$-breakpoint}-#{$-number} {
            width: 100%;
          }

          &.is-#{$-breakpoint}-offset-#{$-number} {
            margin-left: 0;
          }
        }
      }
    }
  }
</style>
