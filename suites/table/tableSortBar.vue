<template>
  <div class="mn-table-sort-bar">
    <div class="mn-table-sort-bar-title">
      {{ title }}
    </div>
    <div class="mn-table-sort-bar-action" v-if="sort !== 'none'">
      <div class="mn-table-sort-bar-dropup" :class="{ 'is-active': sort === 'asc' }"></div>
      <div class="mn-table-sort-bar-dropdown" :class="{ 'is-active': sort === 'desc' }"></div>
    </div>
  </div>
</template>

<script>
  import Element from '../../utils/Element'
  import iconElement from '../icon/icon'

  export default new Element({
    name: 'mn-table-sort-bar',
    components: {
      ...iconElement.inject()
    },
    props: {
      title: String,
      sort: {
        type: String,
        default: 'none',
        validator (val) {
          ['none', 'sortable', 'asc', 'desc'].includes(val)
        }
      }
    },
    data () {
      return {
        dropup: require('vue-human-icons/js/android/arrow-dropup'),
        dropdown: require('vue-human-icons/js/android/arrow-dropdown')
      }
    }
  })
</script>

<style lang="scss">
  @import "../../scss/mixins/arrow";

  .mn-table-sort-bar {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
  }

  .mn-table-sort-bar-action {
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
    cursor: pointer;
  }

  .mn-table-sort-bar-dropup,
  .mn-table-sort-bar-dropdown {
    @include make-arrow();
    width: 6px;
    height: 6px;
    transform: rotate(-45deg);

    &.is-active {
      border-color: #666;
    }
  }

  .mn-table-sort-bar-dropdown {
    transform: rotate(135deg);
  }
</style>
