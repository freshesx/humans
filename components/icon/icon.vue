<template>
  <svg version="1.1"
    :class="[ `${cssPrefix}icon`, { 'is-spin': spin } ]"
    :width="width"
    :height="height"
    :viewBox="box">
    <path :d="path.d" :fill="path.fill" v-for="path in paths"></path>
  </svg>
</template>

<script>
  import { getMergeIcons } from './merge-icons'

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
      cssPrefix () {
        return this.$human.cssPrefix
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
        icons: getMergeIcons()
      }
    }
  }
</script>
