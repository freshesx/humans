<template>
  <div :class="collapseList">
    <div :class="collapseTitle" :index="index" @click="changeIndex">
      <p>
        {{ this.title }}
      </p>
    </div>
    <transition name="collapseToggle">
      <div :class="collapseContent" v-if="selected">
        <slot></slot>
      </div>
    </transition>
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
        flatSelected: false
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
          return this.flatSelected
          // If type is 'flat', use another way to toggle
        }
        return this.index === this.$parent.current
        // Set the current
      }
    },
    mounted () {
      this.$nextTick(function () {
        this.index = this.$parent.collapses.get(this._uid)
        if (this.index === this.$parent.current) this.flatSelected = true
        // Get the index by _uid and set the current.
      })
    },
    methods: {
      changeIndex: function () {
        this.$parent.current = this.index
        if (this.$parent.type === 'flat') {
          this.flatSelected = !this.flatSelected
        }
        // Toggle the content
      }
    }
  }
</script>
