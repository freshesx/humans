<template>
  <div :class="collapseList">
    <div :class="collapseTitle" :index="index" @click="changeIndex">
      <p>
        {{ this.title }}
      </p>
    </div>
    <div :class="collapseContent" v-if="selected">
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
        index: -1,
        isSelected: false
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
        // is-selected
        classes[`is-selected`] = this.selected
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
      selected () {
        if (this.$parent.type === 'flat') {
          return this.isSelected
        }
        return this.index === this.$parent.current
      }
    },
    mounted () {
      this.$nextTick(function () {
        this.index = this.$parent.collapses.get(this._uid)
        if (this.index === this.$parent.current) this.isSelected = true
      })
    },
    methods: {
      changeIndex: function () {
        this.$parent.current = this.index
        this.isSelected = !this.isSelected
      }
    }
  }
</script>
