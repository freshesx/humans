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
        if (this.bgColor) style += `background-color: ${this.bgColor};`
        if (this.fontColor) style += `color: ${this.fontColor};`
        return style
        // If there is bgColor or fontColor, set the style
      }
    },
    props: {
      // is-red, is-green, is-pink etc.
      name: {
        type: String
      },
      // set background-color
      bgColor: {
        type: String
      },
      // set color
      fontColor: {
        type: String
      },
      // is-sm, is-md, is-lg
      size: {
        type: String,
        default: 'md'
      }
    }
  }
</script>
