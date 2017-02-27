<template>
  <transition-group name="has-slide">
    <slot></slot>
  </transition-group>
</template>

<script>
  import Element from '../../util/element'
  import Page from './page'

  export default new Element({
    name: 'mn-page-group',
    mixins: [ Page ]
  })
</script>
