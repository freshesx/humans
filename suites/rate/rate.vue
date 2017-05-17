<template>
  <span class="mn-rate">
    <span class="mn-rate-item" v-for="(item, key) in max" :key="key">
      <slot name="active" v-if="showActive(key)"><mn-icon :name="icons.active"></mn-icon></slot>
      <slot name="unactive" v-if="showUnactive(key)"><mn-icon :name="icons.unactive"></mn-icon></slot>
      <slot name="half" v-if="showHalf(key)"><mn-icon :name="icons.half"></mn-icon></slot>
    </span>
  </span>
</template>

<script>
  import Element from '../../utils/Element'
  import iconElement from '../icon/icon'

  export default new Element({
    name: 'mn-rate',
    components: {
      ...iconElement.inject()
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
      disabled: Boolean,
      color: {
        type: String,
        default: 'rgb(255, 204, 0)'
      }
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
      syncShowValue () {
        this.showValue = this.value
      },
      showActive (key) {
        const number = key + 1

        return Number.isInteger(this.value)
          ? number <= this.value               // 整数
          : number < Math.floor(this.value)    // 具有小数点
      },
      showUnactive (key) {
        return key + 1 > this.value
      },
      showHalf (key) {
        if (!Number.isInteger(this.value)) {
          return key + 1 === Math.floor(this.value)
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
