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
        if (this.text) style += `color: ${this.text};`
        return style
        // If there is background or text, set the style
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
    }
  }
</script>
