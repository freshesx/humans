<template>
  <div :class="tab">
    <div :class="tablist">
      <mn-tab-item
        v-for="(tab, index) in tabs"
        :tab="tab"
        :index="index"
        @tab-item-click="changeCurrent(index)"
        ref="tab"
      ></mn-tab-item>
    </div>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        tabs: [],
        current: this.index,
        flag: 0,
        defaultClasses: this.$human.cssPrefix
      }
    },
    props: {
      index: {
        type: Number,
        default: 0
      }
    },
    mounted: function () {
      this.$children.forEach(tab => this.tabs.push(tab))
    },
    methods: {
      changeCurrent: function (index) {
        this.current = index
      },
      setClass: function (name) {
        let classes = {}
        classes[`${this.defaultClasses}${name}`] = true
        return Object.assign({}, classes)
      }
    },
    computed: {
      tab () {
        return this.setClass('tab')
      },
      tablist () {
        return this.setClass('tab-list')
      }
    }
  }
</script>
