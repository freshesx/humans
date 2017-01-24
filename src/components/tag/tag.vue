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
      if (this.name && !this.bg && !this.text) {
        if (this.name === 'white' || this.name === 'gray-lighter' || this.name === 'gray-lightest') this.textColor = '#000'
      }

      if (this.bg && !this.text) {
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

<style lang="scss">
  @import "../../sass/variables";

  $-tag: #{$namespace}tag;

  $-tag-style: (
    white: $white,
    black: $black,
    black-lighter: $black-lighter,
    black-lightest: $black-lightest,
    gray-darkest: $gray-darkest,
    gray-darker: $gray-darker,
    gray: $gray,
    gray-lighter: $gray-lighter,
    gray-lightest: $gray-lightest,
    red: $red,
    orange: $orange,
    yellow: $yellow,
    green: $green,
    teal-blue: $teal-blue,
    blue: $blue,
    purple: $purple,
    pink: $pink
  );

  @mixin get-color($type) {
    background-color: map-get($-tag-style, $type);
  }

  .#{$-tag} {
    font-size: 0.9rem;
    padding: 0.1rem 0.6rem;
    display: inline-block;
    border-radius: 2rem;
    font-style: normal;
    cursor: default;
    color: #fff;
    background-color: #000;

    // is-primary, is-secondary, is-error etc.
    @each $name, $value in $-tag-style {
      &.is-#{$name} {
        @include get-color($name);
      }
    }

    &.is-sm {
      font-size: 0.7rem;
    }

    &.is-lg {
      font-size: 1rem;
    }

    &:hover {
      opacity: 0.9;
    }
  }
</style>
