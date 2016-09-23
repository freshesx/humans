<template>
  <svg version="1.1"
    class="scoped-icon"
    :class="classes"
    :width="width"
    :height="height"
    :view-box.camel="box"
    :style="style"
  >
    <path :d="icon.d" />
  </svg>
</template>

<script>
  import icons from './icons.json'

  export default {
    props: {
      name: {
        type: String,
        required: true,
        validator: val => {
          return val in icons
        }
      },
      scale: {
        type: Number,
        default: 1,
        coerce: val => {
          val = Number(val)
          return isNaN(val) ? undefined : val
        },
        validator: val => {
          return Number(val) > 0
        }
      },
      spin: Boolean
    },
    computed: {
      classes () {
        return {
          'is-spin': this.spin
        }
      },
      icon () {
        return icons[this.name]
      },
      box () {
        return `0 0 ${this.icon.width} ${this.icon.height}`
      },
      width () {
        return this.icon
          ? this.icon.width * (20 / 24) * this.scale
          : 0
      },
      height () {
        return this.icon
          ? this.icon.height * (20 / 24) * this.scale
          : 0
      },
      style () {
        if (this.scale === 1) {
          return false
        }
        return {
          fontSize: this.scale + 'em'
        }
      }
    },
    register (custom) {
      for (let name in custom) {
        icons[name] = custom[name]
      }
    }
  }
</script>

<style lang="scss" scoped>
  @keyframes icon-spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .scoped-icon {
    display: inline-block;
    fill: currentColor;
    vertical-align: -4px;

    &.is-spin {
      animation: icon-spin 2s 0s infinite linear;
    }
  }
</style>
