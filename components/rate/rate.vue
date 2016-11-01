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
      // Provide some options.
      max: {
        type: Number,
        default: 5
      },
      // option: the quantity of the stars
      default: {
        type: Number,
        default: 0
      },
      // option: the default value of the rate
      disable: {
        type: Boolean,
        default: false
      },
      // option: is clickable or not
      colors: {
        type: Array,
        default: function () {
          return ['#999', '#000']
        }
      }
      //         Default color for stars. Each item can be omitted.
      // option: The first item is unselected color.
      //         The last item is selected color.
    },
    data () {
      return {
        defaultClasses: this.$human.cssPrefix,
        currentIndex: -1,
        selectedIndex: -1,
        lastIndex: -1
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
        this.lastIndex = this.selectedIndex
        this.selectedIndex = -1
        this.currentIndex = item
        // If disable, readonly. If not, change the color on real time.
      },
      mouseLeaveEvent: function (item) {
        if (this.disable) {
          return
        }
        this.selectedIndex = this.lastIndex
        this.currentIndex = -1
        // If disable, readonly. If not, change the color on real time.
      },
      clickItem: function (item) {
        if (this.disable) {
          return
        }
        this.lastIndex = item
        this.selectedIndex = item
        // If disable, readonly. If not, change the color on real time.
      }
    }
  }
</script>
