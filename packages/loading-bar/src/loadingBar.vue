<template>
  <div class="mn-loading-bar" v-if="isShow">
    <div class="mn-loading-bar-finish" :style="{
      width: `${percent}%`,
      'transition-duration': `${millisecond}ms`
    }"></div>
  </div>
</template>

<script>
  export default {
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
  }
</script>
