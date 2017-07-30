<template>
  <div class="mn-table-tool">
    <slot></slot>
    <div class="mn-table-tool-box">
      <div class="mn-table-tool-action">
        <slot name="action"></slot>
      </div>
      <div class="mn-table-tool-operate">
        <!-- 预留插槽，未启用 -->
        <!-- <slot name="operate"></slot> -->
      </div>
    </div>
  </div>
</template>

<script>
  import Element from '../../utils/Element'

  export default new Element({
    name: 'mn-table-tool'
  })
</script>

<style lang="scss">
  .mn-table-tool {
    background: #fff;
    padding: 1rem;
    border-bottom-left-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    margin-bottom: 1rem;
  }

  .mn-table-tool-box {
    display: flex;
  }

  .mn-table-tool-action {
    flex: 1;
  }

  .mn-table-tool-operate {

  }
</style>
