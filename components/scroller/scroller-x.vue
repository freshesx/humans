<template>
  <div
    class="mn-scroller"
    :class="{ 'is-x': true, 'is-bar': scrollbar }">
    <div class="mn-scroller-contents">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import Element from '../../util/Element'

  export default new Element({
    name: 'mn-scroller-x',
    props: {
      scrollbar: {
        type: Boolean,
        default: false
      }
    }
  })
</script>
