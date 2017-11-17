<template>
  <span class="mn-icon" :style="{ width: `${width * scale}px`, height: `${height * scale}px` }">
      <span class="mn-icon-svg" v-html="svg" v-if="!loading"
        :style="{ width: `${width * scale}px`, height: `${height * scale}px` }"></span>
      <mn-loading-icon v-if="loading"></mn-loading-icon>
    </span>
</template>

<script>
  import Element from '../../utils/Element'
  import loadingIconElement from '../loadingIcon/loadingIcon'
  import isString from 'lodash/isString'
  import isObject from 'lodash/isObject'

  export default new Element({
    name: 'mn-icon',
    components: {
      ...loadingIconElement.insert()
    },
    props: {
      /**
       * 传递 svg 内容，以显示在图标上
       * svg 的内容可以通过 vue-human-icons 获得
       * @see {@link https://www.npmjs.com/package/vue-human-icons}
       */
      name: null,

      /**
       * 图标的宽度，单位是 px。
       */
      width: {
        type: Number,
        default: 24
      },

      /**
       * 图标的高度，单位是 px。
       */
      height: {
        type: Number,
        default: 24
      },

      /**
       * 图标按比例缩放，如果高度和宽度相等，请使用该属性控制宽度和高度按比例缩放
       * 宽度高度设定的 24px 是行高的值，如果行高缩放的话，
       * 建议将 scale 也同样缩放，以达到图标与文字的对齐效果。
       */
      scale: {
        type: Number,
        default: 1
      },

      /**
       * 是否显示为加载状态，如果为 true，则显示的图标改为加载状态的图标
       */
      loading: Boolean
    },
    computed: {
      /**
       * 计算 name 传递的内容，以返回适合的 svg 格式，以显示在图标上
       * @method svg
       * @return {String}
       */
      svg () {
        // import some from 'vue-human-icons/some'
        if (isString(this.name)) return this.name
        // some = require('vue-human-icons/some')
        if (isObject(this.name) && this.name.hasOwnProperty('default')) return this.name.default

        return '<svg viewBox="0 0 0 0"></svg>'
      }
    }
  })
</script>

<style lang="scss">
  @import "./vars";

  .mn-icon {
    display: inline-block;
    fill: currentColor;
    width: $-mn-icon-width;
    height: $-mn-icon-height;
    text-align: center;
  }

  .mn-icon-svg {
    width: $-mn-icon-width;
    height: $-mn-icon-height;

    > svg {
      vertical-align: top;
    }
  }
</style>
