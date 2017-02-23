<template>
  <div class="mn-tab-bar-item" :class="{ 'is-active': active }" @click="click">
    <div class="mn-tab-bar-icon">
      <mn-icon :name="icon"></mn-icon>
    </div>
    <div class="mn-tab-bar-title">{{ title }}</div>
  </div>
</template>

<script>
  // @todo: 增加对于超链接的支持
  // @todo: 增加点击反馈
  // @todo: 增加 loading 的控制
  // @todo: 增加 badge 的支持
  import Element from '../../util/element'
  import Icon from '../icon/icon'

  export default new Element({
    components: {
      [Icon.name]: Icon
    },
    name: 'mn-tab-bar-item',
    props: {
      icon: null,
      title: String,
      active: Boolean
    },
    methods: {
      click (event) {
        this.$emit('click', event, this)
      }
    }
  })
</script>

<style lang="scss">
  @import "../../scss/vars.scss";

  .mn-tab-bar-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 20%;
    justify-content: center;
    text-align: center;
    color: #999;

    &.is-active {
      color: $pink;
    }
  }

  .mn-tab-bar-title {
    font-size: 12px;
  }
</style>
