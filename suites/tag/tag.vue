<template>
  <span
    class="mn-tag"
    :class="{ [`has-${name}-bg`]: !!name, [`is-${size}`]: !!size }"
    :style="computedStyle">
    <slot></slot>
  </span>
</template>

<script>
  import Element from '../../utils/Element'

  export default new Element({
    name: 'mn-tag',
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
    data () {
      return {
        textColor: undefined
      }
    },
    computed: {
      computedStyle () {
        return {
          background: this.bg || undefined,
          color: this.textColor || undefined
        }
      }
    },
    methods: {
      parseTextColor () {
        if (this.name && !this.bg && !this.text &&
          ['white', 'gray-lighter', 'gray-lightest'].includes(this.name)) {
          return '#000'
        }

        if (this.bg && !this.text) {
          const bg = this.$el.style.backgroundColor
          const reg = /\s?\d{1,3},\s?\d{1,3},\s?\d{1,3}/
          const match = bg.replace(/\s+/g, '').match(reg)

          if (match && match.length > 0 && match[0].length > 0) {
            const [r, g, b] = match[0].split(',').map(item => parseInt(item))
            const grayLevel = r * 0.299 + g * 0.587 + b * 0.114
            if (grayLevel >= 192) return '#000'
          }
        }

        return this.text
      }
    },
    watch: {
      '$el.style.backgroundColor' () {
        this.textColor = this.parseTextColor()
      }
    },
    mounted () {
      this.$nextTick(() => {
        this.textColor = this.parseTextColor()
      })
    }
  })
</script>

<style lang="scss">
  .mn-tag {
    font-size: 0.9rem;
    padding: 0.1rem 0.6rem;
    display: inline-block;
    border-radius: 2rem;
    cursor: default;
    color: #fff;
    background: #000;

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
