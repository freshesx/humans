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
  import iconsStorage from '../../util/icons'

  export default {
    name: 'mn-icon',
    props: {
      /**
       * name 值是当前 icon 的命名，如果该名称在 icons 里不存在，则会读取 svg 的配置
       */
      name: {
        type: String,
        required: true
      },
      /**
       * { "viewBox": "", "paths": [] }
       */
      svg: {
        type: Object,
        validator: val => {
          if (!val) return true
          if (val.paths instanceof Array && val.viewBox) return true
        }
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
        if (this.icons[this.name]) return this.icons[this.name]
        if (this.svg) return this.svg
        return
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
        icons: iconsStorage.items()
      }
    }
  }
</script>
