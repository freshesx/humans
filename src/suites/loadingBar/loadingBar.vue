<template>
  <div class="mn-loading-bar" v-if="isShow">
    <div class="mn-loading-bar-finish" :style="{
      width: `${percent}%`,
      'transition-duration': `${millisecond}ms`
    }"></div>
  </div>
</template>

<script>
  import Element from 'vue-human/utils/Element'

  export default new Element({
    name: 'mn-loading-bar',
    props: {
      /**
       * 是否显示加载条
       */
      isShow: Boolean,

      /**
       * 主题类
       * @todo 预留
       */
      theme: String,

      /**
       * 加载百分比
       */
      percent: {
        type: Number,
        default: 0,
        validator: val => val >= 0 && val <= 100
      },

      /**
       * 动画的毫秒
       */
      millisecond: {
        type: Number,
        default: 1000
      }
    }
  })
</script>

<style lang="scss">
  @import "./vars";
  @import "../../scss/mixins/media";

  .mn-loading-bar {
    position: fixed;
    width: 100%;
    height: 3px;
    top: 0;
    left: 0;
    right: 0;
    overflow: hidden;
  }

  .mn-loading-bar-finish {
    position: absolute;
    height: 3px;
    top: 0;
    left: 0;
    background: $mn-loading-bar-mobile-bg;

    @include min-screen('desktop') {
      background: $mn-loading-bar-desktop-bg;
    }
  }
</style>
