<template>
  <div class="tab">
    <div class="tab-list">
      <div class="tab-item">
        <mn-tab-item
          v-for="(tab, index) in tabs"
          :tab="tab"
          :index="index"
          @tab-item-click="changeCurrent(index)"
          ref="tab"
        ></mn-tab-item>
      </div>
    </div>
    <div class="tab-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        tabs: [],
        current: this.index,
        flag: 0
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
      }
    }
  }
</script>
