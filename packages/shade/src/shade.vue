<template>
  <transition :name="transition">
    <div class="mn-shade" v-if="visible" :style="{ 'z-index': zIndex }"
      @click.prevent.stop="onHide"></div>
  </transition>
</template>

<script>
  import { layerMixin } from '@humans/layer'

  /**
   * mn-shade（遮盖浮层）
   * @module suites/shade/shade
   * @param {string}    [theme]           - 主题
   * @parma {boolean}   [disableClosing]  - 禁用 “关闭” 事件
   */
  export default {
    name: 'mn-shade',
    mixins: [
      layerMixin
    ],
    props: {
      theme: String,
      disableClosing: Boolean
    },
    methods: {
      onHide () {
        if (!this.disableClosing) this.hide()
      }
    }
  }
</script>
