<template>
  <transition name="mn-menu-toggle">
    <div class="mn-menu-content" v-if="selected">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
  import Element from '../../util/Element'

  export default new Element({
    name: 'mn-menu-content',
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
    }
  })
</script>

<style lang="scss">
  .mn-menu-content {
    overflow: hidden;
    box-sizing: border-box;
    max-height: 999px;
  }

  .mn-menu-toggle-enter-active,
  .mn-menu-toggle-leave-active {
    transition: all 0.2s ease;
  }

  .mn-menu-toggle-enter,
  .mn-menu-toggle-leave-active {
    max-height: 0;
  }
</style>
