<template>
  <div :class="[ `${cssPrefix}tab-item`, { 'is-active': isActive } ]" @click="click">
    <mn-icon :class="[ `${cssPrefix}tab-item-icon` ]" :name="this.tab.icon" v-if="this.tab.icon"></mn-icon>
    <p :class="[ `${cssPrefix}tab-item-title` ]" v-if="this.tab.title">{{ this.tab.title }}</p>
  </div>
</template>

<script>
  import Icon from '../icon/icon'

  export default {
    components: {
      [Icon.name]: Icon
    },
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

<style lang="scss">
  @import "../../sass/vars";
  @import "./vars";

  .#{$-tab-item} {
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    justify-content: space-around;
    height: 3rem;
    text-align: center;
    cursor: pointer;
    padding: 0.2rem 0;

    &.is-active {
      color: $-tab-active-color;
    }

    &.is-bottom {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      margin: 0;
    }
  }

  .#{$namespace}tab-item-icon,
  .#{$namespace}tab-item-title {
    flex: 0 0 auto;
    align-self: center;
    margin: 0;
    padding: 0;
    font-size: 0.8rem;
  }
</style>
