<template>
  <div class="mn-table-group">
    <div class="mn-table-group-prefix" v-if="$slots.action || $slots.view">
      <div class="mn-table-group-action">
        <slot name="action"></slot>
      </div>
      <div class="mn-table-group-view">
        <slot name="view"></slot>
      </div>
    </div>
    <div class="mn-table-group-body">
      <slot></slot>
    </div>
    <div class="mn-table-group-suffix" v-if="$slots.info || $slots.paginate">
      <div class="mn-table-group-info">
        <slot name="info"></slot>
      </div>
      <div class="mn-table-group-paginate">
        <slot name="paginate"></slot>
      </div>
    </div>
  </div>
</template>

<script>
  import Element from '../../utils/Element'

  export default new Element({
    name: 'mn-table-group'
  })
</script>

<style lang="scss">
  .mn-table-group {
    border-radius: 0.25rem;
    overflow: hidden;
    margin-bottom: 1rem;
  }

  .mn-table-group-prefix,
  .mn-table-group-suffix {
    background: #fff;
    display: flex;
    border-bottom: solid 1px rgba(0, 0, 0, 0.05);
    padding: 0.5rem 1rem;
    align-items: center;
  }

  .mn-table-group-suffix {
    border: none;
    border-top: solid 1px rgba(0, 0, 0, 0.05);
  }

  .mn-table-group-action {
    flex: 1;
    display: flex;
  }

  .mn-table-group-view {
    display: flex;
  }

  .mn-table-group-body {

  }

  .mn-table-group-info {
    flex: 1;
  }

  .mn-table-group-paginate {

  }
</style>
