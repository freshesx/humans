<template>
  <div class="mn-table-tool">
    <div class="mn-table-tool-action">
      <div class="mn-table-tool-btn" v-if="hasFilters">
        <mn-icon :name="cog" :scale="0.8"></mn-icon>
      </div>
      <div class="mn-table-tool-prefix">
        <slot name="prefix"></slot>
      </div>
      <div class="mn-table-tool-suffix">
        <slot name="suffix"></slot>
      </div>
    </div>
    <div class="mn-table-tool-filter" v-if="hasFilters">
      <slot></slot>
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
    margin-bottom: 1rem;
  }

  .mn-table-tool-action {
    display: flex;
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
  }
</style>
