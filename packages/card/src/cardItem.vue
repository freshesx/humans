<template>
  <div
    class="mn-card-item"
    :class="{
      [`is-${type}`]: !!type,
      'is-focus': focus,
      'is-disabled': disabled
    }"
    @click="click">
    <slot></slot>
  </div>
</template>

<script>
  /**
   * mn-card-item（卡片内的每一条的布局的组件）
   * @module suites/card/cardItem
   * @param {string} [type] - 行的类型，有 link, arrow, cursor 可选，
   * link 表示 具有右箭头和鼠标箭头状态；
   * arrow 表示 仅仅具有右箭头；
   * cursor 表示 仅仅具有鼠标箭头状态。
   * @param {boolean} [disabled=false] - 是否禁用该项，主要表现为 click 事件无效
   */
  export default {
    name: 'mn-card-item',
    props: {
      type: {
        type: String,
        validator: val => ['link', 'arrow', 'cursor'].includes(val)
      },
      disabled: Boolean
    },
    data () {
      return {
        focus: false
      }
    },
    methods: {
      /**
       * 触发点击事件
       * @event click
       * @property {Event} $event - DOM Event 对象
       * @property {VueComponent} cardItem - 自身
       */
      click ($event) {
        this.$emit('click', $event, this)
        if (this.type) {
          this.focus = true
          setTimeout(() => {
            this.focus = false
          }, 150)
        }
      }
    }
  }
</script>
