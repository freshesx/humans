<template>
  <div :class="[ `${cssPrefix}tab` ]">
    <div :class="[ `${cssPrefix}tab-list`, { 'is-bottom': this.bottom } ]">
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
    },
    computed: {
      cssPrefix () {
        return this.$human.cssPrefix
      }
    }
  }
</script>
