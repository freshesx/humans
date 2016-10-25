<template>
  <div class="bar-tab">
    <div class="bar-tab-lists">
      <div class="bar-tab-items">
        <mn-tab-item
          v-for="(tab, index) in tabs"
          :tab="tab"
          :index="index"
          @tab-item-click="changeCurrent(index)"
          ref="tab"
        ></mn-tab-item>
      </div>
    </div>
    <div class="bar-tab-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        tabs: [],
        current: this.defaultIndex,
        flag: 0
      }
    },
    props: {
      defaultIndex: {
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
      }
    }
  }
</script>
