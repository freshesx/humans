<template>
  <span class="mn-rate" @mouseleave="onLeave">
    <span class="mn-rate-item" :class="{ 'is-disabled': disabled }"
      @mouseenter="onEnter($event, item)"
      @click="onClick($event, item)"
      v-for="(item, key) in max" :key="key">
      <slot name="active" v-if="showActive(item)"><mn-icon :name="icons.active"></mn-icon></slot>
      <slot name="unactive" v-if="showUnactive(item)"><mn-icon :name="icons.unactive"></mn-icon></slot>
      <slot name="half" v-if="showHalf(item)"><mn-icon :name="icons.half"></mn-icon></slot>
    </span>
  </span>
</template>

<script>
  import Element from '../../utils/Element'
  import iconElement from '../icon/icon'

  export default new Element({
    name: 'mn-rate',
    components: {
      ...iconElement.insert()
    },
    props: {
      max: {
        type: Number,
        default: 5
      },
      /**
       * 如果为 3 的话，前三个为实星，后两个为空星。
       * 如果为 3.6 的话，前两个为实星，中间为半星，后两个为空星。
       * 如果为 3.2 的话，前两个为实星，中间为半星，后两个为空星。
       */
      value: {
        type: Number,
        default: 0
      },
      disabled: Boolean
    },
    data () {
      return {
        showValue: 0,
        icons: {
          unactive: require('vue-human-icons/js/ios/star-outline'),
          active: require('vue-human-icons/js/ios/star'),
          half: require('vue-human-icons/js/ios/star-half')
        }
      }
    },
    methods: {
      onEnter (event, item) {
        this.showValue = item
      },
      onLeave () {
        this.showValue = this.value
      },
      onClick (event, item) {
        this.$emit('update:value', item)
        this.$emit('input', item)
      },
      syncShowValue () {
        this.showValue = this.value
      },
      showActive (item) {
        return item <= this.showValue
      },
      showUnactive (item) {
        return Number.isInteger(this.showValue)
          ? item > this.showValue               // 整数
          : item > Math.ceil(this.showValue)    // 具有小数点
      },
      showHalf (item) {
        if (!Number.isInteger(this.showValue)) {
          return item === Math.ceil(this.showValue)
        }
      }
    },
    watch: {
      value () {
        this.syncShowValue()
      }
    },
    created () {
      this.syncShowValue()
    }
  })
</script>

<style lang="scss">
  @import "./vars";

  .mn-rate {
    color: $mn-rate-color;
  }

  .mn-rate-item {
    cursor: pointer;

    &.is-disabled {
      cursor: default;
    }
  }
</style>
