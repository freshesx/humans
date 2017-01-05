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
       * name 优先选择为 SVG JSON 对象，逐步淘汰 string 名称
       */
      name: {
        type: [String, Object],
        required: true,
        validator: val => {
          if (typeof val === 'string') return true
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
        if (typeof this.name === 'string') return this.icons[this.name]
        if (typeof this.name === 'object') return this.name
        console && console.warn('未指定图标参数')
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
