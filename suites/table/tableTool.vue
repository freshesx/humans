<template>
  <div class="mn-table-tool">
    <div class="mn-table-tool-filter" v-if="hasFilters">
      <slot></slot>
      <div class="mn-table-tool-filter-box">
        <div class="mn-table-tool-filter-action">
          <slot name="action"></slot>
        </div>
        <div class="mn-table-tool-filter-operate">
          <slot name="operate"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Element from '../../utils/Element'

  export default new Element({
    name: 'mn-table-tool',
    data () {
      return {
        cog: require('vue-human-icons/js/android/apps')
      }
    },
    computed: {
      hasFilters () {
        return this.$slots.default
      }
    }
  })
</script>

<style lang="scss">
  .mn-table-tool {
  }

  .mn-table-tool-action {
    display: flex;
    background: #fff;
    padding: 0.5rem 1rem;
    align-items: center;
    border-bottom: solid 1px rgba(0, 0, 0, 0.05);
  }

  .mn-table-tool-prefix {
    display: flex;
    flex: 1;
  }

  .mn-table-tool-suffix {
    display: flex;
  }

  .mn-table-tool-btn {
    background: #fff;
    height: 2.25rem + 0.5rem;
    width: 2.25rem;
    padding: 0.5rem;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    margin-right: 0.5rem;
  }

  .mn-table-tool-filter {
    background: #fff;
    padding: 1rem;
    border-bottom-left-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    margin-bottom: 1rem;
  }

  .mn-table-tool-filter-box {
    display: flex;
  }

  .mn-table-tool-filter-action {
    flex: 1;
  }

  .mn-table-tool-filter-operate {

  }
</style>
