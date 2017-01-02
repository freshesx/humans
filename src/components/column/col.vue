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
        type: [String, Array]
      },
      tablet: {
        type: [String, Array]
      },
      desktop: {
        type: [String, Array]
      },
      widescreen: {
        type: [String, Array]
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

        lodash.forIn(this.media, (value, key) => {
          // 如果值为字符串，则有两种情况：one 或则 one, one。第二位表示 offset
          if (lodash.isString(value)) {
            if (value.includes(',')) {
              const query = lodash.split(value, /,+\s*/)
              if (query[0].length > 0) {
                classes.push({ [`is-${key}-${query[0]}`]: true })
              }
              if (query[1].length > 0) {
                classes.push({ [`is-${key}-offset-${query[1]}`]: true })
              }
            } else {
              classes.push({ [`is-${key}-${value}`]: true })
            }
          }
          // 如果为数组
          if (lodash.isArray(value)) {
            // 第一位为 span
            if (lodash.isString(value[0])) {
              classes.push({ [`is-${key}-${value[0]}`]: true })
            }
            // 第二位为 offset
            if (lodash.isString(value[1])) {
              classes.push({ [`is-${key}-offset-${value[1]}`]: true })
            }
          }
        })

        return classes
      }
    }
  }
</script>
