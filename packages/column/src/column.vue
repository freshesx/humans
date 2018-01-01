<template>
  <div class="mn-column" :class="[ widthClass ]" :style="[ orderStyle ]">
    <slot></slot>
  </div>
</template>

<script>
  import order from './order'
  import screens from './screens'

  export default {
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
        const configOfScreens = screens.map(screen => {
          if (typeof this[screen.name] !== 'undefined') {
            return Object.assign(
              {},
              screen,
              this.parseConfig(this[screen.name])
            )
          }
        })

        return configOfScreens.filter(item => typeof item !== 'undefined')
      },

      /**
       * Computed class
       *
       * @return {Array}
       */
      widthClass () {
        const classes = []

        this.mediaQueries.forEach(config => {
          if (typeof config.span !== 'undefined') {
            classes.push([ `is-${config.name}-${config.span}` ])
          }
          if (typeof config.offset !== 'undefined') {
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
        if (typeof query === 'string') {
          const [span, offset, order] = query.split(/,\s*/)
          return {
            span: this.parseString(span),
            offset: this.parseString(offset),
            order: this.parseString(order)
          }
        }

        // @todo the query is only plain object
        // query.toString === '[object Object]'
        if (typeof query === 'object' && !Array.isArray(query)) {
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
        return typeof value !== 'undefined' && value !== ''
          ? parseInt(value)
          : undefined
      }
    }
  }
</script>
