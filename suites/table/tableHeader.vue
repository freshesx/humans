<template>
  <div class="mn-table-hd">
    <div class="mn-table-hd-col" v-for="(column, key) in columns" :key="key" :style="[ calcWidth(column.width) ]">
      {{ column.title }}
    </div>
  </div>
</template>

<script>
  import Element from '../../utils/Element'
  import isUndefined from 'lodash/isUndefined'

  export default new Element({
    name: 'mn-table-header',
    props: {
      columns: {
        type: Array,
        default () {
          return []
        }
      }
    },
    methods: {
      calcWidth (width) {
        if (isUndefined(width)) {
          return { width: '120px' }
        }

        if (/^\d+&/.test(width)) {
          return { flex: width }
        }

        return {
          width: width
        }
      }
    }
  })
</script>

<style lang="scss">
  .mn-table-hd {
    display: flex;
    flex-wrap: nowrap;
    border-radius: 0.25rem;
    background: #007aff;
    color: rgba(255, 255, 255, 1);
  }

  .mn-table-hd-col {
    padding: 0.75rem 1rem;
    font-weight: 500;

    & + & {
      border-left: solid 2px rgba(255, 255, 255, 0.3);
    }
  }
</style>
