<template>
  <div class="mn-column" :style="[ widthStyle, offsetStyle, orderStyle]">
    <slot></slot>
  </div>
</template>

<script>
  import Element from '../../util/Element'
  import media from './media'
  import isString from 'lodash/isString'

  export default new Element({
    name: 'mn-column',
    mixins: [ media ],
    data () {
      return {
        /**
         * Clear padding-left
         *
         * @type {Boolean}
         */
        clearLeftPadding: false,

        /**
         * Clear padding-right
         *
         * @type {Boolean}
         */
        clearRightPadding: false
      }
    },
    computed: {
      /**
       * Adapted column config
       * @todo Convert object media query
       *
       * @return {Object}
       */
      columnConfig () {
        // Default config
        const columnConfig = { span: 12, offset: 0, order: 0 }

        // Parse string media query value
        if (isString(this.adaptedMediaConfig)) {
          Object.assign(columnConfig, this.convertQuery(this.adaptedMediaConfig))
        }

        // !important sets
        // Only use single column (12 span, 0 offset) under `mobile` screen
        if (this.adaptedMediaName === 'mobile') {
          Object.assign(columnConfig, { span: 12, offset: 0 })
        }

        return columnConfig
      },

      /**
       * Flex width
       *
       * @return {Object}
       */
      widthStyle () {
        return {
          width: `${(100 / 12) * this.columnConfig.span}%`
        }
      },

      /**
       * Flex marginLeft
       *
       * @return {Object}
       */
      offsetStyle () {
        return {
          'margin-left': this.columnConfig.offset > 0
            ? `${(100 / 12) * this.columnConfig.offset}%`
            : undefined
        }
      },

      /**
       * Flex order
       *
       * @return {Object}
       */
      orderStyle () {
        return {
          order: this.columnConfig.order > 0
            ? this.columnConfig.order
            : undefined
        }
      },

      /**
       * Flex padding
       *
       * @return {Object}
       */
      paddingStyle () {
        return {
          'padding-left': this.clearLeftPadding ? 0 : undefined,
          'padding-right': this.clearRightPadding ? 0 : undefined
        }
      }
    },
    methods: {
      /**
       * Convert string media value to number object
       *
       * @method convertQuery
       * @param  {String}     mediaValue
       * @return {Object}
       */
      convertQuery (mediaValue) {
        const splitReg = /,\s*/
        const [span, offset, order] = mediaValue.split(splitReg)

        return {
          span: span ? parseInt(span) : undefined,
          offset: offset ? parseInt(offset) : undefined,
          order: order ? parseInt(order) : undefined
        }
      }
    }
  })
</script>

<style lang="scss">
  @import "../../scss/vars";

  .mn-column {
    width: 100%;
    padding: 0 $grid-gutters * 0.5;
  }
</style>
