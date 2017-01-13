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
        let style = ''
        if (this.background) style += `background-color: ${this.background};`
        if (this.textColor) style += `color: ${this.textColor};`
        return style
        // If there is background or text, set the style
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
      background: {
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
        if (rgb.indexOf('rgb') === -1) return
        // If the color is 'red' or something like that, the font color is '#fff'

        const rRgba = /rgba?\((\d{1,3}),(\d{1,3}),(\d{1,3})(,([.\d]+))?\)/

        const rsa = rgb.replace(/\s+/g, '').match(rRgba)

        const r = (+rsa[1])
        const g = (+rsa[2])
        const b = (+rsa[3])
        // get the r, g, b value

        const grayLevel = r * 0.299 + g * 0.587 + b * 0.114
        // count the grayLevel

        if (grayLevel >= 192) this.textColor = '#000'
        // count the font color
      }
    }
  }
</script>
