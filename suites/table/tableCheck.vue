<template>
  <input type="checkbox" :checked="checked">
</template>

<script>
  import Element from '../../utils/Element'

  export default new Element({
    name: 'mn-table-check',
    props: {
      checked: Boolean
    }
  })
</script>
