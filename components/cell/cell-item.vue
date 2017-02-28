<template>
  <mn-card-item :type="type">
    <mn-card-prefix>
      单选
    </mn-card-prefix>
    <slot></slot>
  </mn-card-item>
</template>

<script>
  import Element from '../../util/element'

  export default new Element({
    name: 'mn-cell-item',
    props: {
      type: String
    }
  })
</script>

<style lang="scss">
  // component scss
</style>
