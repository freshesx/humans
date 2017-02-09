<template>
  <div class="mn-tab-bar">
    <div class="mn-tab-bar-list" :class="{ 'is-bottom': bottom }">
      <mn-tab-bar-item
        v-for="(tab, index) in tabs"
        :tab="tab"
        :index="index"
        @tab-item-click="changeCurrent(index, tab)"
      ></mn-tab-bar-item>
    </div>
    <slot></slot>
  </div>
</template>

<script>
  import TabBarItem from './tab-bar-item'

  export default {
    components: {
      [TabBarItem.name]: TabBarItem
    },
    name: 'mn-tab-bar',
    data () {
      return {
        tabs: [],
        current: this.selected,
        flag: 0
      }
    },
    props: {
      selected: {
        type: Number,
        default: 0
        // automatic selected by :selected
      },
      bottom: {
        type: Boolean,
        default: false
      }
    },
    mounted: function () {
      this.$children.forEach(tab => this.tabs.push(tab))
      // Add contents to items
    },
    methods: {
      changeCurrent: function (index, tab) {
        this.current = index
        this.$emit('tab-click', tab)
        // Add 'tab-click' function
      }
    }
  }
</script>

<style lang="scss">
  @import "./vars";

  .mn-tab-bar {
    width: 100%;

    li,
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    a,
    a:active,
    a:hover,
    a:visited {
      color: $-tab-text-color;
      text-decoration: none;
    }
  }

  .mn-tab-bar-list {
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    height: 3rem;
    background-color: $-tab-background;
    color: $-tab-text-color;
  }
</style>
