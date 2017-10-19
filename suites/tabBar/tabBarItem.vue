<template>
  <div class="mn-tab-bar-item" :class="{ 'is-active': active }" :style="{ width: computedWidth }" @click="click">
    <slot>
      <div class="mn-tab-bar-badge" :class="{ 'is-more': badge && badge > 9 }"
        v-if="badge && badge > 0">{{ badge && badge <= 9 ? badge : '' }}</div>
      <div class="mn-tab-bar-icon">
        <mn-icon :name="icon"></mn-icon>
      </div>
      <div class="mn-tab-bar-title">{{ title }}</div>
    </slot>
  </div>
</template>

<script>
  import Element from '../../utils/Element'
  import iconElement from '../icon/icon'

  export default new Element({
    components: {
      ...iconElement.insert()
    },
    name: 'mn-tab-bar-item',
    props: {
      icon: null,
      title: String,
      active: Boolean,
      badge: {
        type: Number
      }
    },
    methods: {
      click (event) {
        this.$emit('click', event, this)
      }
    },
    computed: {
      computedWidth () {
        let length = this.$parent.childrenLength !== 0
          ? this.$parent.childrenLength
          : 1
        return `${100 / length}%`
      }
    }
  })
</script>

<style lang="scss">
  @import "./vars";

  .mn-tab-bar-item {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    color: $mn-tab-bar-item-color;
    cursor: pointer;

    // @todo 增加 scss 配置至 vars
    &.is-active {
      color: $mn-tab-bar-item-active-color;
    }
  }

  .mn-tab-bar-title {
    font-size: 12px;
  }

  .mn-tab-bar-badge {
    position: absolute;
    width: 18px;
    height: 18px;
    border-radius: 9px;
    background: $mn-tab-bar-item-badge-bg;
    font-size: 10px;
    color: #fff;
    top: 3px;
    left: 50%;
    margin-left: 6px;
    line-height: 18px;
    text-align: center;

    &.is-more {
      width: 10px;
      height: 10px;
      border-radius: 5px;
    }
  }
</style>
