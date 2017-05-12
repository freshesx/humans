<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
  import Element from '../../utils/Element'

  export default new Element({
    name: 'mn-menu-pane',
    data () {
      return {
        isSelected: false
      }
    }
  })
</script>
