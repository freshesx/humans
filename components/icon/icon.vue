<template>
  <svg version="1.1" class="icon" :class="classes" :width="width" :height="height" :viewBox="box">
    <path :d="path.d" :fill="path.fill" v-for="path in paths"></path>
  </svg>
</template>

<script>
  export default {
    props: {
      name: {
        type: String,
        required: true
      },
      scale: {
        type: Number,
        default: 1,
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
        return this.icons[this.name]
      },
      paths () {
        return this.icon ? this.icon.paths : ''
      },
      box () {
        return this.icon ? this.icon.viewBox : '0 0 0 0'
      },
      width () {
        return this.icon ? 20 * this.scale : 0
      },
      height () {
        return this.icon ? 20 * this.scale : 0
      }
    },
    data () {
      return {
        icons: require('./icons.json')
      }
    }
  }
</script>
