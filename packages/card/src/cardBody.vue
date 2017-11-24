<template>
  <div
    class="mn-card-body"
    :class="{
      [`is-${columnName}`]: !!columnName,
      'is-muted': muted,
      'is-action': action
    }">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'mn-card-body',
    props: {
      muted: Boolean,
      action: Boolean
    },
    data () {
      return {
        columnName: undefined
      }
    }
  }
</script>
