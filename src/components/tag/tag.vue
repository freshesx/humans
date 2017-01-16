<template>
  <i :class="[ `${cssPrefix}tag`, hasName, hasSize ]" :style="style">
    <slot></slot>
  </i>
</template>

<script>
  export default {
    name: 'mn-tag',
    computed: {
      cssPrefix () {
        return this.$human.cssPrefix
      },
      hasName () {
        if (this.name) return `is-${this.name}`
      },
      hasSize () {
        if (this.size) return `is-${this.size}`
      },
      style () {
        // If there is background or text, set the style
        let style = ''
        if (this.bg) style += `background-color: ${this.bg};`
        if (this.textColor) style += `color: ${this.textColor};`
        return style
      }
    },
    data () {
      return {
        textColor: this.text
      }
    },
    props: {
      // is-red, is-green, is-pink etc.
      name: {
        type: String
      },
      // set background-color
      bg: {
        type: String
      },
      // set color
      text: {
        type: String
      },
      // is-sm, is-md, is-lg
      size: {
        type: String,
        default: 'md'
      }
    },
    mounted () {
      if (this.background && !this.text) {
        const rgb = this.$el.style.backgroundColor
        // If the color is 'red' or something like that, the font color is '#fff'
        if (rgb.indexOf('rgb') === -1) return

        const rRgba = /rgba?\((\d{1,3}),(\d{1,3}),(\d{1,3})(,([.\d]+))?\)/

        const rsa = rgb.replace(/\s+/g, '').match(rRgba)

        // get the r, g, b value
        const r = (+rsa[1])
        const g = (+rsa[2])
        const b = (+rsa[3])

        // count the grayLevel
        const grayLevel = r * 0.299 + g * 0.587 + b * 0.114

        // count the font color
        if (grayLevel >= 192) this.textColor = '#000'
      }
    }
  }
</script>
