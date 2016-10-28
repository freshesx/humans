<template>
  <div :class="tab">
    <div :class="tablist">
      <mn-tab-item
        v-for="(tab, index) in tabs"
        :tab="tab"
        :index="index"
        @tab-item-click="changeCurrent(index)"
      ></mn-tab-item>
    </div>
    <slot></slot>
  </div>
</template>

<script>
  import classes from './classes'
  export default {
    data () {
      return {
        tabs: [],
        current: this.selected,
        flag: 0,
        defaultClasses: this.$human.cssPrefix
      }
    },
    props: {
      selected: {
        type: Number,
        default: 0
        // automatic selected by :selected
      }
    },
    mounted: function () {
      this.$children.forEach(tab => this.tabs.push(tab))
      // Add contents to items
    },
    methods: {
      changeCurrent: function (index) {
        this.current = index
      }
    },
    computed: {
      tab () {
        return classes('tab')
      },
      tablist () {
        return classes('tab-list')
      }
    }
  }
</script>
