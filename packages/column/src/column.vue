<template>
  <div class="mn-column" :class="[ widthClass ]" :style="[ orderStyle ]">
    <!-- The column contents -->
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
      /**
       * Mobile screen config
       */
      mobile: {
        type: [String, Object]
      },
      /**
       * Tablet screen config
       */
      tablet: {
        type: [String, Object]
      },
      /**
       * Desktop screen config
       */
      desktop: {
        type: [String, Object]
      },
      /**
       * Widescreen screen config
       */
      widescreen: {
        type: [String, Object]
      }
    },
    computed: {
      // Calculate all screens media queries
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
      // Computed class
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
