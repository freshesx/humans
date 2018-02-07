<template>
  <div
    class="mn-card-body"
    :class="{
      [`is-${columnName}`]: !!columnName,
      'is-muted': muted,
      'is-action': action
    }">
    <!-- Card body contents -->
    <slot></slot>
  </div>
</template>

<script>
/**
 * Card body component
 */
export default {
  name: 'MnCardBody',
  props: {
    /**
     * class 'is-muted'
     * @todo Review whether this prop is necessary
     */
    muted: Boolean,
    /**
     * class 'is-action', will be less gutter for control component,
     * e.g. mn-btn.
     */
    action: Boolean
  },
  data () {
    return {
      /**
       * Set placeholder for cardPrefix and cardSuffix.
       */
      columnName: undefined
    }
  }
}
</script>
