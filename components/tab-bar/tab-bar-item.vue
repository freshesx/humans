<template>
  <div :class="[ `${cssPrefix}tab-item`, { 'is-active': isActive } ]" @click="click">
    <mn-icon :name="this.tab.icon" v-if="this.tab.icon"></mn-icon>
    <p v-if="this.tab.title">{{ this.tab.title }}</p>
  </div>
</template>

<script>
  export default {
    name: 'mn-tab-bar-item',
    props: {
      tab: {
        type: Object,
        required: true
      },
      index: {
        type: Number,
        required: true
      }
    },
    computed: {
      cssPrefix () {
        return this.$human.cssPrefix
      },
      isActive () {
        return this.$parent.current === this.index
      }
    },
    methods: {
      click: function () {
        this.$emit('tab-item-click')
        this.$parent.flag = this.tab._uid
        // show this item's content, tracking by _uid
      }
    },
    mounted: function () {
      if (this.$parent.current === this.index) this.$parent.flag = this.tab._uid
    }
  }
</script>
