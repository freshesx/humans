<template>
  <div :class="[ `${cssPrefix}menu-list` ]">
    <div :class="[ `${cssPrefix}menu-title`, { 'is-selected': this.selected } ]" :index="index" @click="changeIndex">
      <p>
        {{ this.title }}
      </p>
    </div>
    <transition :name="`${cssPrefix}menu-toggle`">
      <div :class="[ `${cssPrefix}menu-content` ]" v-if="selected">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'mn-menu-pane',
    props: {
      title: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        index: -1,
        isSelected: false
      }
    },
    computed: {
      selected () {
        if (this.$parent.type === 'flat') return this.isSelected
        // If type is 'flat', use another way to toggle
        return this.index === this.$parent.current
        // Set the current
      },
      cssPrefix () {
        return this.$human.cssPrefix
      }
    },
    mounted () {
      this.$nextTick(function () {
        this.index = this.$parent.menus.get(this._uid)
        if (this.index === this.$parent.current) this.isSelected = true
        // Get the index by _uid and set the current.
      })
    },
    methods: {
      changeIndex: function () {
        this.$parent.current = this.index
        if (this.$parent.type === 'flat') this.isSelected = !this.isSelected
        // Toggle the content
      }
    }
  }
</script>
