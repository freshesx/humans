<template>
  <div class="mn-menu-title" :class="{ 'is-selected': this.selected }" :index="index" @click="changeIndex">
    <slot></slot>
  </div>
</template>

<script>
  import Element from '../../util/Element'

  export default new Element({
    name: 'mn-menu-title',
    data () {
      return {
        index: -1
      }
    },
    computed: {
      selected () {
        if (this.$parent.$parent.type === 'flat') return this.$parent.isSelected
        // If type is 'flat', use another way to toggle
        return this.index === this.$parent.$parent.current
        // Set the current
      }
    },
    mounted () {
      this.$nextTick(function () {
        this.index = this.$parent.$parent.menus.get(this.$parent._uid)
        if (this.index === this.$parent.$parent.current) this.$parent.isSelected = true
        // Get the index by _uid and set the current.
      })
    },
    methods: {
      changeIndex: function () {
        this.$parent.$parent.current = this.index
        if (this.$parent.$parent.type === 'flat') this.$parent.isSelected = !this.$parent.isSelected
        // Toggle the content
      }
    }
  })
</script>
