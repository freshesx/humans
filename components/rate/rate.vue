<template>
  <span :class="classes">
    <i
      v-for="item in this.max"
      @mouseenter="mouseEnterEvent(item)"
      @mouseleave="mouseLeaveEvent(item)"
      @click="clickItem(item)">
      <mn-rate-item :index="item"></mn-rate-item>
    </i>
  </span>
</template>

<script>
  export default {
    props: {
      max: {
        type: Number,
        default: 5
      },
      default: {
        type: Number,
        default: 0
      },
      disable: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        defaultClasses: this.$human.cssPrefix,
        currentIndex: -1,
        selectedIndex: -1
      }
    },
    computed: {
      classes () {
        let classes = {}
        // basic class
        classes[`${this.$human.cssPrefix}rate`] = true
        // return default and now classes
        return Object.assign({}, classes)
      }
    },
    methods: {
      mouseEnterEvent: function (item) {
        if (this.disable) {
          return
        }
        this.currentIndex = item
        this.$emit('rate-mouse-enter', item)
      },
      mouseLeaveEvent: function (item) {
        if (this.disable) {
          return
        }
        this.currentIndex = -1
        this.$emit('rate-mouse-leave', item)
      },
      clickItem: function (item) {
        if (this.disable) {
          return
        }
        this.selectedIndex = item
        this.$emit('rate-click', item)
      }
    }
  }
</script>
