<template>
  <div :class="collapseList">
    <div :class="collapseTitle" :index="index" @click="changeIndex">
      <p>
        {{ this.title }}
      </p>
    </div>
    <div :class="collapseContent" v-if="isSelected">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        defaultClasses: this.$human.cssPrefix,
        index: -1
      }
    },
    computed: {
      collapseList () {
        let classes = {}
        // basic class
        classes[`${this.$human.cssPrefix}collapse-list`] = true
        // return default and now classes
        return Object.assign({}, classes)
      },
      collapseTitle () {
        let classes = {}
        // basic class
        classes[`${this.$human.cssPrefix}collapse-title`] = true
        // return default and now classes
        return Object.assign({}, classes)
      },
      collapseContent () {
        let classes = {}
        // basic class
        classes[`${this.$human.cssPrefix}collapse-content`] = true
        // return default and now classes
        return Object.assign({}, classes)
      },
      isSelected () {
        return this.index === this.$parent.current
      }
    },
    mounted () {
      this.$nextTick(function () {
        this.index = this.$parent.collapses.get(this._uid)
      })
    },
    methods: {
      changeIndex: function () {
        this.$parent.current = this.index
      }
    }
  }
</script>
