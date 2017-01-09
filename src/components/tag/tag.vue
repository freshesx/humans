<template>
  <i :class="[ `${cssPrefix}tag`, hasName ]" :style="style">
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
      style () {
        let style = ''
        if (this.bgColor) style += `background-color: ${this.bgColor};`
        if (this.fontColor) style += `color: ${this.fontColor};`
        return style
      }
    },
    props: {
      // is-red, is-green, is-pink etc.
      name: {
        type: String
      },
      bgColor: {
        type: String
      },
      fontColor: {
        type: String
      }
    }
  }
</script>
