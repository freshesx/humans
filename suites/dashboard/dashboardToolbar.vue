<template>
  <div class="mn-dashboard-toolbar">
    <slot></slot>
  </div>
</template>

<script>
  import Element from 'vue-human/utils/Element'

  export default new Element({
    name: 'mn-dashboard-toolbar'
  })
</script>
