<template>
  <div :class="[`${cssPrefix}col`, queryClass]">
    <slot></slot>
  </div>
</template>

<script>
  import lodash from 'lodash'

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
    data () {
      return {
        media: {
          mobile: this.mobile,
          tablet: this.tablet,
          desktop: this.desktop,
          widescreen: this.widescreen
        }
      }
    },
    computed: {
      cssPrefix () {
        return this.$human.cssPrefix
      },
      queryClass () {
        const classes = []

        let media = {
          ...this.mobile ? { mobile: this.mobile } : undefined,
          ...this.tablet ? { tablet: this.tablet } : undefined,
          ...this.desktop ? { desktop: this.desktop } : undefined,
          ...this.widescreen ? { widescreen: this.widescreen } : undefined
        }

        lodash.forIn(media, (value, key) => {
          const [span, offset] = lodash.split(value, /,+\s*/)

          if (span) classes.push({ [`is-${key}-${span}`]: true })
          if (offset) classes.push({ [`is-${key}-offset-${offset}`]: true })
        })

        return classes
      }
    }
  }
</script>
