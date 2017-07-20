<template>
  <div class="mn-table-filter">
    <div class="mn-table-filter-prefix" v-if="label || icon">
      <mn-icon :name="icon" v-if="icon" :scale="0.8"></mn-icon>
      {{ label }}
    </div>
    <div class="mn-table-filter-body">
      <slot></slot>
    </div>
    <div class="mn-table-filter-suffix" v-if="$slots.suffix">
      <slot name="suffix"></slot>
    </div>
  </div>
</template>

<script>
  import Element from '../../utils/Element'

  export default new Element({
    name: 'mn-table-filter',
    props: {
      label: String,
      icon: null
    }
  })
</script>

<style lang="scss">
  @import "../../scss/vars";

  .mn-table-filter {
    display: flex;
    align-items: center;
    background: #eee;
    border-radius: 0.25rem;
    height: 2.25rem;
    padding: 0 1rem;
    margin-bottom: 1rem;
  }

  .mn-table-filter-body {
    flex: 1;
  }

  .mn-table-filter-prefix {
    margin-right: 0.5rem;
    color: #999;
    font-weight: bold;
  }

  .mn-table-filter-suffix {
    margin-left: 0.5rem;
    color: #999;
  }
</style>
